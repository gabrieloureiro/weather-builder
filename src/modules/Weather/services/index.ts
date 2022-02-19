import apiClient from "services/apiClient";
import {
  QueryParams,
  WeatherQueryResponse,
  ForecastQueryResponse,
} from "modules/Weather/types";

export async function getCurrentWeather({
  lat,
  lon,
  units,
  lang,
}: QueryParams): Promise<WeatherQueryResponse> {
  const { data } = await apiClient.get<WeatherQueryResponse>("weather", {
    params: {
      lat,
      lon,
      appid: process.env.NEXT_PUBLIC_OPEN_WETHER_API_KEY,
      units,
      lang,
    },
  });

  return data;
}

export async function getForecast({
  lat,
  lon,
  units,
  lang,
}: QueryParams): Promise<ForecastQueryResponse> {
  const { data } = await apiClient.get<ForecastQueryResponse>("forecast", {
    params: {
      lat,
      lon,
      appid: process.env.NEXT_PUBLIC_OPEN_WETHER_API_KEY,
      units,
      lang,
    },
  });

  return data;
}
