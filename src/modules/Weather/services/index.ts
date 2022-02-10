import apiClient from "services/apiClient";
import {
  WeatherQueryParams,
  WeatherQueryResponse,
} from "modules/Weather/types";

export async function getCurrentWeather({
  lat,
  lon,
  units = "metric",
}: WeatherQueryParams): Promise<WeatherQueryResponse> {
  const { data } = await apiClient.get<WeatherQueryResponse>("weather", {
    params: {
      lat,
      lon,
      appid: process.env.NEXT_PUBLIC_OPEN_WETHER_API_KEY,
      units,
    },
  });

  return data;
}
