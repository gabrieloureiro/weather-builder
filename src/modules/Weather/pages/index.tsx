import { Carousel, Layout, SkeletonCard } from "components";
import { useMediaQuery } from "hooks/use-media-query";
import { useIntl } from "react-intl";
import { TemperatureCard, LocaleCard } from "modules/Weather/components";
import { useWeatherContent } from "modules/Weather/context";
import * as C from "@chakra-ui/react";

const Weather: React.VFC = () => {
  const { formatMessage } = useIntl();
  const { weather, isLoading, isFetching, isFetched, isError } =
    useWeatherContent();
  const { isDesktop } = useMediaQuery();

  return (
    <Layout
      title={formatMessage({ id: "page.home.title" })}
      description={formatMessage({ id: "page.home.description" })}
    >
      <C.Flex flexDirection={["column", "row"]} justify="center">
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
          isError={isError}
        />
        <C.Flex
          flexDirection="column"
          flex="1"
          ml={["0", "16px"]}
          mt={["16px", "0"]}
        >
          <Carousel show={isDesktop ? 3 : 1}>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </Carousel>
          <LocaleCard />
        </C.Flex>
      </C.Flex>
    </Layout>
  );
};

export default Weather;
