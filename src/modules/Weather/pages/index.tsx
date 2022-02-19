import { Carousel, Layout, RefreshButton, SkeletonCard } from "components";
import { useMediaQuery } from "hooks/use-media-query";
import { useIntl } from "react-intl";
import {
  SunHoursInfoCard,
  CurrentWeatherCard,
  CurrentTimeLocaleCard,
  LimitsTemperatureCard,
  TemperatureCard,
} from "modules/Weather/components";
import * as C from "@chakra-ui/react";
import { useForecastContent, useWeatherContent } from "../context";
import { useCallback } from "react";

const Weather: React.VFC = () => {
  const { formatMessage } = useIntl();
  const { isDesktop } = useMediaQuery();
  const [isCustomMedia] = C.useMediaQuery("(min-width: 1104px)");
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

  const onRefetch = useCallback(() => {
    onRefetchWeather();
    onRefetchForecast();
  }, [onRefetchForecast, onRefetchWeather]);

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
      <C.Flex flexDirection={isCustomMedia ? "row" : "column"}>
        <CurrentTimeLocaleCard />
        <C.Flex
          w="100%"
          flexDirection="column"
          ml={isCustomMedia ? "16px" : 0}
          mt={isCustomMedia ? "0" : "16px"}
        >
          <Carousel show={isDesktop ? 3 : 1}>
            <CurrentWeatherCard />
            <LimitsTemperatureCard />
            <SunHoursInfoCard isSunrise />
            <SunHoursInfoCard />
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
