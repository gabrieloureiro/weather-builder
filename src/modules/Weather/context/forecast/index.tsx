import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useForecast } from "modules/Weather/hooks/use-forecast";
import { WeatherQueryParams as ForecastQueryParams } from "modules/Weather/types";
import { parseCookies, setCookie } from "nookies";
import { MAX_AGE } from "constants/index";
import { useLanguage } from "context";
import { formatLang, formatPeriod } from "modules/Weather/utils";
import { QueryEffects } from "types";
import moment from "moment";

type PeriodProps = {
  startDate: string;
  endDate: string;
};

type ForecastContentContextValue = {
  forecast: any;
  onRefetch: () => void;
} & QueryEffects &
  PeriodProps;

const ForecastContentContext =
  createContext<ForecastContentContextValue | null>(null);

export const useForecastContent: () => ForecastContentContextValue = () =>
  useContext(ForecastContentContext);

export const ForecastContentProvider: React.FC = ({ children }) => {
  const { coordinates: coordinatesCookie } = parseCookies();
  const [currentLat, setCurrentLat] = useState<number>(0);
  const [currentLon, setCurrentLon] = useState<number>(0);
  const [period, setPeriod] = useState<PeriodProps>({} as PeriodProps);
  const { currentLocale } = useLanguage();

  const lang = formatLang(currentLocale);

  const { data, isFetched, isFetching, isLoading, isError, refetch } =
    useForecast({ lat: currentLat, lon: currentLon, lang });

  const [currentContent, setCurrentContent] = useState<any>({} as any);

  const isDefinedCoordinates = currentLat !== 0 && currentLon !== 0;

  const onRefetch = useCallback(() => {
    refetch();
  }, [refetch]);

  const value = useMemo(
    () => ({
      forecast: currentContent,
      startDate: period.startDate,
      endDate: period.endDate,
      isLoading,
      isFetched,
      isFetching,
      isError,
      onRefetch,
    }),
    [
      currentContent,
      period,
      isError,
      isFetched,
      isFetching,
      isLoading,
      onRefetch,
    ]
  );

  useEffect(() => {
    if (!coordinatesCookie && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) =>
        setCurrentLat(position.coords.latitude)
      );
      navigator.geolocation.getCurrentPosition((position) =>
        setCurrentLon(position.coords.longitude)
      );
    }
  }, [coordinatesCookie]);

  useEffect(() => {
    if (coordinatesCookie) {
      const { lat: cookieLat, lon: cookieLon }: ForecastQueryParams =
        JSON.parse(coordinatesCookie);

      setCurrentLat(cookieLat);
      setCurrentLon(cookieLon);
    } else if (isDefinedCoordinates) {
      setCookie(
        undefined,
        "coordinates",
        JSON.stringify({ lat: currentLat, lon: currentLon }),
        {
          maxAge: MAX_AGE,
          path: "/",
        }
      );
    }
  }, [coordinatesCookie, currentLat, currentLon, isDefinedCoordinates]);

  useEffect(() => {
    const formattedForecastList = data?.list?.map((item) => {
      return {
        ...item,
        dt_txt: formatPeriod(item.dt_txt),
      };
    });

    setCurrentContent({ ...data, list: formattedForecastList });

    if (data?.list) {
      const { list } = data;
      const { length, 0: first, [length - 1]: last } = list;
      setPeriod({
        startDate: moment(first?.dt_txt.substring(0, 10)).format("DD/MM/YYYY"),
        endDate: moment(last?.dt_txt.substring(0, 10)).format("DD/MM/YYYY"),
      });
    }
  }, [data]);

  return (
    <ForecastContentContext.Provider value={value}>
      {children}
    </ForecastContentContext.Provider>
  );
};
