import { useQuery, UseQueryResult } from "react-query";
import { getForecast } from "modules/Weather/services";
import { QueryParams, ForecastQueryResponse } from "modules/Weather/types";
import { useLanguage } from "context";
import { formatLang, formatUnits } from "../utils";

const FORECAST_CACHE = "forecast-cache";

export const useForecast = (
  params: QueryParams
): UseQueryResult<ForecastQueryResponse, string> => {
  const { currentLocale } = useLanguage();

  const lang = formatLang(currentLocale);
  const units = formatUnits(currentLocale);

  const isDefinedCoordinates = params.lat !== 0 && params.lon !== 0;

  return useQuery<ForecastQueryResponse, string>(
    [FORECAST_CACHE, params],
    isDefinedCoordinates ? () => getForecast({ ...params, lang, units }) : null
  );
};
