import { useWeatherContent } from "../context";

const Weather: React.VFC = () => {
  const { weather, isLoading } = useWeatherContent();

  return <h1>Hello world</h1>;
};

export default Weather;
