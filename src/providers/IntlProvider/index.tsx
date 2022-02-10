import { useRouter } from "next/router";

import { IntlProvider as ReactIntlProvider } from "react-intl";

import { locales } from "locales";
import { useLanguage } from "context";

export const IntlProvider: React.FC = ({ children }) => {
  const { defaultLocale } = useRouter();
  const { currentLocale } = useLanguage();
  const messages = locales[currentLocale];

  return (
    <ReactIntlProvider
      locale={currentLocale}
      defaultLocale={defaultLocale}
      messages={messages}
    >
      {children}
    </ReactIntlProvider>
  );
};

