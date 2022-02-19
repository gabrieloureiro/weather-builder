import { AppProps } from "next/app";
import { AppProvider } from "providers";

import "keen-slider/keen-slider.min.css";

require("mocks/index");

const MyApp: React.VFC = ({ Component, pageProps }: AppProps) => {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
};

export default MyApp;
