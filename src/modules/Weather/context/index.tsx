import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useWeather } from "modules/Weather/hooks/use-weather";
import {
  WeatherQueryParams,
  WeatherQueryResponse,
} from "modules/Weather/types";
import { parseCookies, setCookie } from "nookies";
import { MAX_AGE } from "constants/index";

type WeatherContentContextValue = {
  weather: WeatherQueryResponse;
  isLoading: boolean;
};

const WeatherContentContext = createContext<WeatherContentContextValue | null>(
  null
);

export const useWeatherContent: () => WeatherContentContextValue = () =>
  useContext(WeatherContentContext);

export const WeatherContentProvider: React.FC = ({ children }) => {
  const { coordinates: coordinatesCookie } = parseCookies();
  const [currentLat, setCurrentLat] = useState<number>(0);
  const [currentLon, setCurrentLon] = useState<number>(0);

  const { data, isFetched, isFetching, isLoading, isError, refetch } =
    useWeather({ lat: currentLat, lon: currentLon });

  const [currentContent, setCurrentContent] = useState<WeatherQueryResponse>(
    {} as WeatherQueryResponse
  );

  const isDefinedCoordinates = currentLat !== 0 && currentLon !== 0;

  const value = useMemo(
    () => ({
      weather: currentContent,
      isLoading,
      isFetched,
      isFetching,
      isError,
      refetch,
    }),
    [currentContent, isError, isFetched, isFetching, isLoading, refetch]
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
      const { lat: cookieLat, lon: cookieLon }: WeatherQueryParams =
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
