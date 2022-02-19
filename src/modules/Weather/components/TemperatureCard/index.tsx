import { Card, SkeletonCard } from "components";
import { useForecastContent } from "modules/Weather/context";
import * as C from "@chakra-ui/react";
import { useIntl } from "react-intl";
import { TemperatureChart } from "..";
import SkeletonTemperatureCard from "./skeleton";
import { useMemo } from "react";

const TemperatureCard: React.VFC = () => {
  const { formatMessage } = useIntl();
  const {
    forecast,
    startDate,
    endDate,
    isLoading,
    isFetching,
    isFetched,
    isError,
  } = useForecastContent();

  const hasNoData = isError && (!startDate || !endDate || !forecast);

  const showDetailedSkeleton = (isLoading || isFetching) && !isFetched;

  const content = useMemo(() => {
    if (showDetailedSkeleton) {
      return <SkeletonTemperatureCard />;
    }

    return (
      <>
        <C.Text mb="12px" fontSize={["14px", "16px"]}>
          {formatMessage(
            { id: "page.home.chart.temperature.heading" },
            { startDate: <b>{startDate}</b>, endDate: <b>{endDate}</b> }
          )}
        </C.Text>
        <TemperatureChart />
      </>
    );
  }, [endDate, formatMessage, showDetailedSkeleton, startDate]);

  return hasNoData ? (
    <SkeletonCard h="450px" maxW="100%" mt="16px" />
  ) : (
    <Card h="450px" maxW="100%" mt="16px" highlightColor="cyan.400">
      {content}
    </Card>
  );
};

export default TemperatureCard;
