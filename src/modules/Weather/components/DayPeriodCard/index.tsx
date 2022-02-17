import { Card, SkeletonCard } from "components";
import { DayPeriodCardProps } from "./types";
import * as C from "@chakra-ui/react";
import { formatTemperature } from "modules/Weather/utils";
import { useIntl } from "react-intl";
import { useLanguage } from "context";
import SkeletonDayPeriodCard from "./skeleton";

const DayPeriodCard: React.FC<DayPeriodCardProps> = ({
  temp,
  feelsLike,
  humidity,
  tempMax,
  tempMin,
  pressure,
  isLoading,
  isFetching,
  isFetched,
  isError,
}) => {
  const { formatMessage } = useIntl();
  const { currentLocale } = useLanguage();
  const hasTemperaturePercent = !isLoading && temp && tempMax && isFetched;
  const showLoadingSkeleton =
    (isLoading || isFetching) && !isFetched && !isError;

  if (isError) return <SkeletonCard />;

  if (showLoadingSkeleton) return <SkeletonDayPeriodCard />;

  return (
    <Card highlightColor="cyan.400" h="640px">
      <C.Flex flexDirection="column" justify="center" align="flex-start">
        <C.Text fontSize={["12px", "14px"]}>
          {formatMessage(
            { id: "page.home.card.temperature.max" },
            { tempMax: formatTemperature(tempMax, currentLocale) }
          )}
        </C.Text>
        <C.Text fontSize={["12px", "14px"]} my="16px">
          Atual: {formatTemperature(temp, currentLocale)}
        </C.Text>
        <C.Text fontSize={["12px", "14px"]}>
          {formatMessage(
            { id: "page.home.card.temperature.min" },
            { tempMin: formatTemperature(tempMin, currentLocale) }
          )}
        </C.Text>
      </C.Flex>

      <C.Stack spacing="16px" mt="32px">
        <C.Text fontSize={["14px", "16px"]}>
          {formatMessage(
            { id: "page.home.card.temperature.humidity" },
            { humidity }
          )}
        </C.Text>
        <C.Text fontSize={["14px", "16px"]}>
          {formatMessage(
            { id: "page.home.card.temperature.pressure" },
            { pressure }
          )}
        </C.Text>
      </C.Stack>
    </Card>
  );
};

export default DayPeriodCard;
