import { Card, SkeletonCard } from "components";
import * as C from "@chakra-ui/react";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { useWeatherContent } from "modules/Weather/context";
import moment from "moment";
import { SunHoursInfoCardProps } from "./types";
import { useMemo } from "react";
import SkeletonSunHoursInfoCard from "./skeleton";
import { useIntl } from "react-intl";
import { TRANSITION } from "animations";

const SunHoursInfoCard: React.VFC<SunHoursInfoCardProps> = ({
  isSunrise = false,
}) => {
  const { weather, isError, isLoading, isFetched, isFetching } =
    useWeatherContent();

  const hasNoData = isError && !weather;

  const { formatMessage } = useIntl();

  const showDetailedSkeleton = (isLoading || isFetching) && !isFetched;

  const currentHour = isSunrise ? weather?.sys.sunrise : weather?.sys.sunset;

  const formattedCurrentHour = moment.unix(currentHour).format("HH:m:ss");

  const currentIcon = isSunrise ? FiSunrise : FiSunset;

  const currentLabel = isSunrise
    ? formatMessage({ id: "page.home.card.sunrise.label" })
    : formatMessage({ id: "page.home.card.sunset.label" });

  const content = useMemo(() => {
    if (showDetailedSkeleton) {
      return <SkeletonSunHoursInfoCard />;
    }

    return (
      <C.Center flexDirection="column" h="100%">
        <C.Center w="100px" h="100px" borderRadius="12px" bg="gray.500">
          <C.Icon
            as={currentIcon}
            color={isSunrise ? "yellow.200" : "cyan.500"}
            fontSize="56px"
          />
        </C.Center>
        <C.Text textAlign="center" my="4px">
          {currentLabel}
        </C.Text>
        <C.Text
          fontWeight="bold"
          lineHeight={["14px", "18px"]}
          fontSize={["14px", "18px"]}
        >
          {formattedCurrentHour}
        </C.Text>
      </C.Center>
    );
  }, [
    currentIcon,
    currentLabel,
    formattedCurrentHour,
    isSunrise,
    showDetailedSkeleton,
  ]);

  return hasNoData ? (
    <SkeletonCard />
  ) : (
    <Card
      transition={{ ...TRANSITION, delay: isSunrise ? 1.15 : 1.25 }}
      highlightColor={isSunrise ? "yellow.100" : "white"}
    >
      {content}
    </Card>
  );
};

export default SunHoursInfoCard;
