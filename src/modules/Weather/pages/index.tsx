import { Carousel, Layout, SkeletonCard } from "components";
import { useMediaQuery } from "hooks/use-media-query";
import { useIntl } from "react-intl";
import { TemperatureCard } from "modules/Weather/components";
import { useWeatherContent } from "modules/Weather/context";

const Weather: React.VFC = () => {
  const { formatMessage } = useIntl();
  const { weather, isLoading, isFetching, isFetched } = useWeatherContent();
  const { isDesktop } = useMediaQuery();

  return (
    <Layout
      title={formatMessage({ id: "page.home.title" })}
      description={formatMessage({ id: "page.home.description" })}
    >
      <Carousel show={isDesktop ? 3 : 1}>
        <TemperatureCard
          temp={weather?.main?.temp}
          tempMax={weather?.main?.temp_max}
          tempMin={weather?.main?.temp_min}
          feelsLike={weather?.main?.feels_like}
          humidity={weather?.main?.humidity}
          pressure={weather?.main?.pressure}
          isLoading={isLoading}
          isFetching={isFetching}
          isFetched={isFetched}
        />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </Carousel>
    </Layout>
  );
};

export default Weather;
