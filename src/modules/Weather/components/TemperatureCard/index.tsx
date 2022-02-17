import { Card, SkeletonCard } from "components";
import { useForecastContent } from "modules/Weather/context";
import * as C from "@chakra-ui/react";
import { useIntl } from "react-intl";
import { TemperatureChart } from "..";
import SkeletonTemperatureCard from "./skeleton";

const TemperatureCard = () => {
  const { formatMessage } = useIntl();
  const { startDate, endDate, isLoading, isFetching, isFetched, isError } =
    useForecastContent();

  const showDetailedSkeleton = (isLoading || isFetching) && !isFetched;

  if (showDetailedSkeleton) {
    return <SkeletonTemperatureCard />;
  }

  if (isError) {
    return <SkeletonCard h="450px" maxW="100%" mt="16px" />;
  }

  return (
    <Card h="450px" maxW="100%" mt="16px" highlightColor="cyan.400">
      <C.Text mb="12px" fontSize={["14px", "16px"]}>
        {formatMessage(
          { id: "page.home.chart.temperature.heading" },
          { startDate: <b>{startDate}</b>, endDate: <b>{endDate}</b> }
        )}
      </C.Text>
      <TemperatureChart />
    </Card>
  );
};

export default TemperatureCard;
