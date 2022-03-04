import { useQuery, UseQueryResult } from "react-query";
import { getCurrentWeather } from "modules/Weather/services";
import { QueryParams, WeatherQueryResponse } from "modules/Weather/types";
import { useLanguage } from "context";
import { formatLang, formatUnits } from "../utils";

const WEATHER_CACHE = "weather-cache";

export const useWeather = (
  params: QueryParams
): UseQueryResult<WeatherQueryResponse, string> => {
  const { currentLocale } = useLanguage();

  const lang = formatLang(currentLocale);
  const units = formatUnits(currentLocale);

  return useQuery<WeatherQueryResponse, string>([WEATHER_CACHE, params], () =>
    getCurrentWeather({ ...params, lang, units })
  );
};
