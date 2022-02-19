import { Card, SkeletonCard } from "components";
import * as C from "@chakra-ui/react";
import { useWeatherContent } from "modules/Weather/context";
import { BsArrowRight, BsWind } from "react-icons/bs";
import { useIntl } from "react-intl";
import React, { useMemo } from "react";
import SkeletonWindSpeedCard from "./skeleton";
import { formatSpeedUnit } from "modules/Weather/utils";
import { useLanguage } from "context";
import { TRANSITION } from "animations";

const WindSpeedCard: React.VFC = () => {
  const { weather, isLoading, isError, isFetched, isFetching } =
    useWeatherContent();
  const { currentLocale } = useLanguage();
  const { formatMessage } = useIntl();

  const hasNoData = isError || !weather;

  const showDetailedSkeleton = (isLoading || isFetching) && !isFetched;

  const content = useMemo(() => {
    if (showDetailedSkeleton) {
      return <SkeletonWindSpeedCard />;
    }

    return (
      <C.Center flexDirection="column" h="100%">
        <C.Flex align="center">
          <C.Icon as={BsWind} fontSize="48px" color="gray.500" />
          <C.Icon as={BsArrowRight} fontSize="40px" />
        </C.Flex>
        <C.Text mt="8px" fontWeight="bold" fontSize={["14px", "18px"]}>
          {formatMessage(
            { id: "page.home.card.wind-speed.label" },
            {
              windSpeed: formatSpeedUnit(weather?.wind.speed, currentLocale),
            }
          )}
        </C.Text>
      </C.Center>
    );
  }, [currentLocale, formatMessage, showDetailedSkeleton, weather?.wind.speed]);

  return hasNoData ? (
    <SkeletonCard />
  ) : (
    <Card
      transition={{ ...TRANSITION, delay: 1.05 }}
      highlightColor="yellow.200"
    >
      {content}
    </Card>
  );
};

export default WindSpeedCard;
