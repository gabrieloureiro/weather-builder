import { Card, SkeletonCard } from "components";
import { TemperatureCardProps } from "./types";
import GaugeChart from "react-gauge-chart";
import * as C from "@chakra-ui/react";
import { formatTemperature, handleChangeTemperaturePercentage } from "./utils";
import { useIntl } from "react-intl";
import { useLanguage } from "context";
import SkeletonTemperatureCard from "./skeleton";

const TemperatureCard: React.FC<TemperatureCardProps> = ({
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
  const isMinTemperature = temp === tempMin;
  const isMaxTemperature = temp === tempMax;
  const showLoadingSkeleton =
    (isLoading || isFetching) && !isFetched && !isError;

  if (isError) return <SkeletonCard />;

  if (showLoadingSkeleton) return <SkeletonTemperatureCard />;

  return (
    <Card highlightColor="yellow.400">
      {hasTemperaturePercent && (
        <GaugeChart
          hideText
          nrOfLevels={25}
          cornerRadius={0}
          arcWidth={0.45}
          arcPadding={0.056}
          textColor="#CBD5E0"
          needleColor="#CBD5E0"
          needleBaseColor="#CBD5E0"
          colors={["#0BC5EA", "#DD6B20"]}
          percent={handleChangeTemperaturePercentage(
            isMinTemperature,
            isMaxTemperature
          )}
        />
      )}

      <C.Flex
        flexDirection={["column", "row"]}
        justify="space-between"
        align={["center", "unset"]}
        my="16px"
      >
        <C.Text fontWeight="bold">
          {formatMessage(
            { id: "page.home.card.temperature.min" },
            { tempMin: formatTemperature(tempMin, currentLocale) }
          )}
        </C.Text>
        <C.Text mt={["0", "8px"]} fontWeight="bold" fontSize="5xl">
          {formatTemperature(temp, currentLocale)}
        </C.Text>
        <C.Text fontWeight="bold">
          {formatMessage(
            { id: "page.home.card.temperature.max" },
            { tempMax: formatTemperature(tempMax, currentLocale) }
          )}
        </C.Text>
      </C.Flex>
      <C.Stack spacing="16px" mt="32px">
        <C.Text fontSize="16px">
          {formatMessage(
            { id: "page.home.card.temperature.feelsLike" },
            { feelsLike: formatTemperature(feelsLike, currentLocale) }
          )}
        </C.Text>
        <C.Text fontSize="16px">
          {formatMessage(
            { id: "page.home.card.temperature.humidity" },
            { humidity }
          )}
        </C.Text>
        <C.Text fontSize="16px">
          {formatMessage(
            { id: "page.home.card.temperature.pressure" },
            { pressure }
          )}
        </C.Text>
      </C.Stack>
    </Card>
  );
};

export default TemperatureCard;
