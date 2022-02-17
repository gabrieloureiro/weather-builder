import { Card, SkeletonCard } from "components";
import * as C from "@chakra-ui/react";
import { formatTemperature, getWeatherIcon } from "modules/Weather/utils";
import { useWeatherContent } from "modules/Weather/context";
import { useLanguage } from "context";
import SkeletonCurrentWeatherCard from "./skeleton";

const CurrentWeatherCard = () => {
  const { weather, isLoading, isFetching, isFetched, isError } =
    useWeatherContent();
  const { currentLocale } = useLanguage();

  const showDetailedSkeleton = (isLoading || isFetching) && !isFetched;

  if (showDetailedSkeleton) {
    return <SkeletonCurrentWeatherCard />;
  }

  if (isError) {
    return <SkeletonCard />;
  }

  return (
    <Card highlightColor="yellow.400">
      <C.Center flexDirection="column">
        <C.Box borderRadius="12px" bg="gray.500">
          <C.Image src={getWeatherIcon(weather?.weather[0].icon)} />
        </C.Box>
        <C.Text mt="4px" fontWeight="bold" fontSize={["14px", "18px"]}>
          {formatTemperature(weather?.main.temp, currentLocale)}
        </C.Text>
        <C.Text textAlign="center">{weather?.weather[0].description}</C.Text>
      </C.Center>
    </Card>
  );
};

export default CurrentWeatherCard;
