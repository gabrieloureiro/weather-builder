import { LanguageProvider } from "context";
import { IntlProvider, ChakraProvider, QueryClientProvider } from "providers";

export const AppProvider: React.FC = ({ children }) => {
  return (
    <LanguageProvider>
      <QueryClientProvider>
        <IntlProvider>
          <ChakraProvider>{children}</ChakraProvider>
        </IntlProvider>
      </QueryClientProvider>
    </LanguageProvider>
  );
};
