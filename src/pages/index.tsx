import { ForecastContentProvider } from "modules/Weather/context";
import { WeatherContentProvider } from "modules/Weather/context/weather";
import dynamic from "next/dynamic";
import { Loading } from "components";

const WeatherComponent = dynamic(() => import("modules/Weather/pages"), {
  ssr: false,
  loading: () => <Loading />,
});

const Home: React.VFC = () => {
  return (
    <ForecastContentProvider>
      <WeatherContentProvider>
        <WeatherComponent />
      </WeatherContentProvider>
    </ForecastContentProvider>
  );
};

export default Home;
