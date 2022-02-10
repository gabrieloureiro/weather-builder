import { LOCALE } from "locales";

export const formatTemperature = (
  temp: number,
  locale: string
): string | undefined => {
  if (temp) {
    if (locale === LOCALE.PT_BR) {
      return `${temp.toFixed()}º C`;
    }
    return `${temp.toFixed()}º F`;
  }
  return undefined;
};

export const handleChangeTemperaturePercentage = (
  isMinTemperature: boolean,
  isMaxTemperature: boolean
) => {
  if (isMinTemperature) {
    return 0;
  } else if (isMaxTemperature) {
    return 1;
  }
  return 0.5;
};
