import apiClient from "services/apiClient";
import { WeatherQueryParams } from "../types";

export async function getCurrentWeather({
  lat,
  lon,
  units = "metric",
}: WeatherQueryParams): Promise<any> {
  const { data } = await apiClient.get<any>("weather", {
    params: {
      lat,
      lon,
      appid: process.env.NEXT_PUBLIC_OPEN_WETHER_API_KEY,
      units,
    },
  });

  return data;
}
