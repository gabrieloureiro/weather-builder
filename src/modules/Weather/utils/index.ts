import { LOCALE } from "locales";
import { LANG_PT_BR, UNITS } from "modules/Weather/constants";
import moment from "moment";
import { WeatherQueryResponse } from "../types";

export const formatTemperature = (
  temp: number,
  locale: string
): string | undefined => {
  if (temp) {
    if (locale === LOCALE.PT_BR) {
      return `${temp.toFixed(2)}º C`;
    }
    return `${temp.toFixed(2)}º F`;
  }
  return undefined;
};

export const formatLang = (locale: string) => {
  if (locale === LOCALE.PT_BR) {
    return LANG_PT_BR;
  }
};

export const formatUnits = (locale: string) => {
  if (locale === LOCALE.PT_BR) {
    return UNITS.CELSIUS;
  }
  return UNITS.FAHRENHEIT;
};

export const unitsSuffix = (locale: string): string | undefined => {
  if (locale === LOCALE.PT_BR) {
    return "ºC";
  }
  return "ºF";
};

export const formatPeriod = (period: string) => {
  const formattedDate = moment(period.substring(0, 10)).format("DD/MM");
  const formattedHour = period.substring(12, 16);

  return `${formattedDate} ${formattedHour}`;
};

export const getWeatherIcon = (icon: string | undefined) => {
  if (icon) {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
  }
};

export const formatCurrentTime = (dt: number | undefined) => {
  if (dt) {
    return moment.unix(dt).format("DD/MM/YYYY HH:mm:ss");
  }
};

export const formatTimezone = (timezone: number | undefined) => {
  if (timezone) {
    return `UTC ${timezone / 3600}:00`;
  }
};
