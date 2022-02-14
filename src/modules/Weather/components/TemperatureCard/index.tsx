import { Card, SkeletonCard } from "components";
import { TemperatureCardProps } from "./types";
import * as C from "@chakra-ui/react";
import { formatTemperature } from "./utils";
import { useIntl } from "react-intl";
import { useLanguage } from "context";
import SkeletonTemperatureCard from "./skeleton";
import Thermo from "react-thermo";

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
  const showLoadingSkeleton =
    (isLoading || isFetching) && !isFetched && !isError;

  if (isError) return <SkeletonCard />;

  if (showLoadingSkeleton) return <SkeletonTemperatureCard />;

  return (
    <Card highlightColor="yellow.400" h="720px" maxW={["auto", "350px"]}>
      {hasTemperaturePercent && (
        <C.Center>
          <Thermo min={tempMin} max={tempMax} temperature={temp} />
        </C.Center>
      )}

      <C.Flex flexDirection="column" justify="center" align="center" my="64px">
        <C.Text fontWeight="bold">
          {formatMessage(
            { id: "page.home.card.temperature.min" },
            { tempMin: formatTemperature(tempMin, currentLocale) }
          )}
        </C.Text>
        <C.Text my="24px" fontWeight="bold" fontSize="5xl">
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
        <C.Text fontSize={["14px", "16px"]}>
          {formatMessage(
            { id: "page.home.card.temperature.feelsLike" },
            { feelsLike: formatTemperature(feelsLike, currentLocale) }
          )}
        </C.Text>
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

export default TemperatureCard;
