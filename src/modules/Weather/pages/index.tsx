import { Carousel, Layout } from "components";
import { useMediaQuery } from "hooks/use-media-query";
import { useIntl } from "react-intl";
import { useWeatherContent } from "../context";

const Weather: React.VFC = () => {
  const { formatMessage } = useIntl();
  const { weather: weatherData, isLoading } = useWeatherContent();
  const { isDesktop } = useMediaQuery();
  return (
    <Layout
      title={formatMessage({ id: "page.home.title" })}
      description="inicio"
    >
      <Carousel show={isDesktop ? 3 : 1}>
        <div style={{ height: "300px", background: "#f10" }}>
          {weatherData.main.temp.toFixed()}
        </div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
        <div>2</div>
      </Carousel>
    </Layout>
  );
};

export default Weather;
