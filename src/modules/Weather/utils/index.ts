import { LOCALE } from "locales";
import { LANG_PT_BR, UNITS } from "modules/Weather/constants";

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
