import { AppProps } from "next/app";
import { AppProvider } from "providers";

const MyApp: React.VFC = ({ Component, pageProps }: AppProps) => {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
};

export default MyApp;
