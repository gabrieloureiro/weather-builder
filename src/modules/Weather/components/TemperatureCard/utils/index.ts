import { LOCALE } from "locales";

export const formatTemperature = (
  temp: number,
  locale: string
): string | undefined => {
  if (temp) {
    if (locale === LOCALE.PT_BR) {
      return `${temp.toFixed(1)}º C`;
    }
    return `${temp.toFixed(1)}º F`;
  }
  return undefined;
};
