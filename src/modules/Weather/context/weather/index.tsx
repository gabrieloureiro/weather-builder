import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useWeather } from "modules/Weather/hooks/use-weather";
import { QueryParams, WeatherQueryResponse } from "modules/Weather/types";
import { parseCookies, setCookie } from "nookies";
import { MAX_AGE } from "constants/index";
import { useLanguage } from "context";
import { formatLang } from "modules/Weather/utils";
import { QueryEffects } from "types";
import moment from "moment";

type WeatherContentContextValue = {
  weather: WeatherQueryResponse;
  onRefetch: () => void;
} & QueryEffects;

const WeatherContentContext = createContext<WeatherContentContextValue | null>(
  null
);

export const useWeatherContent: () => WeatherContentContextValue = () =>
  useContext(WeatherContentContext);

export const WeatherContentProvider: React.FC = ({ children }) => {
  const { coordinates: coordinatesCookie } = parseCookies();
  const [currentLat, setCurrentLat] = useState<number>(0);
  const [currentLon, setCurrentLon] = useState<number>(0);
  const { currentLocale } = useLanguage();

  const lang = formatLang(currentLocale);

  const { data, isFetched, isFetching, isLoading, isError, refetch } =
    useWeather({ lat: currentLat, lon: currentLon, lang });

  const [currentContent, setCurrentContent] = useState<WeatherQueryResponse>(
    {} as WeatherQueryResponse
  );

  const isDefinedCoordinates = currentLat !== 0 && currentLon !== 0;

  const onRefetch = useCallback(() => {
    refetch();
  }, [refetch]);

  const value = useMemo(
    () => ({
      weather: currentContent,
      isLoading,
      isFetched,
      isFetching,
      isError,
      onRefetch,
    }),
    [currentContent, isError, isFetched, isFetching, isLoading, onRefetch]
  );

  useEffect(() => {
    if (
      !coordinatesCookie &&
      navigator.geolocation &&
      "geolocation" in navigator
    ) {
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
      const { lat: cookieLat, lon: cookieLon }: QueryParams =
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
    setCurrentContent(data);
  }, [data]);

  return (
    <WeatherContentContext.Provider value={value}>
      {children}
    </WeatherContentContext.Provider>
  );
};
