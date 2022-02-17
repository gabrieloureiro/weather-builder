import { Carousel, Layout, RefreshButton, SkeletonCard } from "components";
import { useMediaQuery } from "hooks/use-media-query";
import { useIntl } from "react-intl";
import {
  CurrentWeatherCard,
  CurrentTimeLocaleCard,
  TemperatureCard,
} from "modules/Weather/components";
import * as C from "@chakra-ui/react";
import { useForecastContent, useWeatherContent } from "../context";

const Weather: React.VFC = () => {
  const { formatMessage } = useIntl();
  const { isDesktop } = useMediaQuery();
  const {
    isFetched: isFetchedWeather,
    isFetching: isFetchingWeather,
    onRefetch: onRefetchWeather,
  } = useWeatherContent();

  const {
    isFetched: isFetchedForecast,
    isFetching: isFetchingForecast,
    onRefetch: onRefetchForecast,
  } = useForecastContent();

  const isFetching = isFetchingWeather || isFetchingForecast;

  const isFetched = isFetchedWeather || isFetchedForecast;

  const onRefetch = () => {
    onRefetchWeather();
    onRefetchForecast();
  };

  return (
    <Layout
      title={formatMessage({ id: "page.home.title" })}
      description={formatMessage({ id: "page.home.description" })}
    >
      <C.Flex mb="32px" justify={["center", "flex-end"]}>
        <RefreshButton
          onRefetch={onRefetch}
          isFetching={isFetching}
          isFetched={isFetched}
        />
      </C.Flex>
      <C.Flex flexDirection={["column", "row"]}>
        <CurrentTimeLocaleCard />

        <C.Flex
          flex="1"
          flexDirection="column"
          ml={["0", "16px"]}
          mt={["16px", "0"]}
        >
          <Carousel show={isDesktop ? 3 : 1}>
            <CurrentWeatherCard />
            <SkeletonCard />
            <SkeletonCard />
          </Carousel>
        </C.Flex>
      </C.Flex>
      <TemperatureCard />
    </Layout>
  );
};

export default Weather;
