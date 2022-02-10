import { MAX_AGE } from "constants/index";
import { useRouter } from "next/router";
import { setCookie, parseCookies } from "nookies";
import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";

interface LanguageContextInterface {
  currentLocale: string;
  handleChangeLocale(initialLocale: string): void;
}

interface LanguageProviderProps {
  children: ReactNode;
}

const LanguageContext = createContext({} as LanguageContextInterface);

export const useLanguage = (): LanguageContextInterface =>
  useContext(LanguageContext);

function LanguageProvider({ children }: LanguageProviderProps): JSX.Element {
  const { locale } = useRouter();
  const { "current-language": localeCookie } = parseCookies();
  const localeStickyValue = localeCookie || locale;
  const [currentLocale, setCurrentLocale] = useState(localeStickyValue);

  useEffect(() => {
    const { "current-language": localeCookie } = parseCookies();

    if (localeCookie) {
      setCurrentLocale(localeCookie);
    } else {
      setCookie(undefined, "current-language", locale, {
        maxAge: MAX_AGE,
        path: "/",
      });
    }
  }, []);

  function handleChangeLocale(initialLocale: string) {
    setCurrentLocale(initialLocale);
    setCookie(undefined, "current-language", initialLocale, {
      maxAge: MAX_AGE,
      path: "/",
    });
  }

  return (
    <LanguageContext.Provider
      value={{
        currentLocale,
        handleChangeLocale,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export { LanguageProvider, LanguageContext };
