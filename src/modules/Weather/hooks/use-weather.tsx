import { useQuery, UseQueryResult } from "react-query";
import { getCurrentWeather } from "../services";
import { WeatherQueryParams } from "../types";

const WEATHER_CACHE = "weather-cache";

export default function useWeather(
  params: WeatherQueryParams
): UseQueryResult<any, string> {
  return useQuery<any, string>([WEATHER_CACHE, params], () =>
    getCurrentWeather(params)
  );
}
