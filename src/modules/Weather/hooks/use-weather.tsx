import { useQuery, UseQueryResult } from "react-query";
import { getCurrentWeather } from "modules/Weather/services";
import {
  WeatherQueryParams,
  WeatherQueryResponse,
} from "modules/Weather/types";

const WEATHER_CACHE = "weather-cache";

export const useWeather = (
  params: WeatherQueryParams
): UseQueryResult<WeatherQueryResponse, string> => {
  return useQuery<WeatherQueryResponse, string>([WEATHER_CACHE, params], () =>
    getCurrentWeather(params)
  );
};
