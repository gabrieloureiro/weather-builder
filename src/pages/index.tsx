import { WeatherContentProvider } from "modules/Weather/context";
import dynamic from "next/dynamic";

const WeatherComponent = dynamic(() => import("modules/Weather/pages"));

const Home: React.VFC = () => {
  return (
    <WeatherContentProvider>
      <WeatherComponent />
    </WeatherContentProvider>
  );
};

export default Home;
