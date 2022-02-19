import * as C from "@chakra-ui/react";
import { Card, SkeletonCard } from "components";
import { useWeatherContent } from "modules/Weather/context";
import { formatCurrentTime, formatTimezone } from "modules/Weather/utils";
import { HiClock } from "react-icons/hi";
import { MdLocationOn, MdCloud } from "react-icons/md";
import { IoMdCalendar } from "react-icons/io";
import { useMemo } from "react";
import { WiHumidity } from "react-icons/wi";

import SkeletonCurrentTimeLocaleCard from "./skeleton";
import { useIntl } from "react-intl";
import { TRANSITION } from "animations";

const CurrentTimeLocaleCard: React.VFC = () => {
  const { weather, isLoading, isFetching, isFetched, isError } =
    useWeatherContent();
  const { formatMessage } = useIntl();
  const [isCustomMedia] = C.useMediaQuery("(min-width: 1160px)");

  const showDetailedSkeleton = (isLoading || isFetching) && !isFetched;

  const hasNoData = isError && !weather;

  const content = useMemo(() => {
    if (showDetailedSkeleton) {
      return <SkeletonCurrentTimeLocaleCard />;
    }

    return (
      <C.Stack spacing="16px">
        <C.Flex align="center" flexWrap="wrap">
          <C.Icon as={MdLocationOn} fontSize="24px" />
          <C.Text
            ml="8px"
            fontSize={["14px", "16px", "18px"]}
            lineHeight={["14px", "16px", "16px"]}
          >
            {weather?.name} - {weather?.sys.country}
          </C.Text>
        </C.Flex>
        <C.Flex align="center">
          <C.Icon as={IoMdCalendar} fontSize="24px" />
          <C.Text
            ml="8px"
            fontSize={["14px", "16px"]}
            sx={{
              "@media (max-width: 690px)": {
                fontSize: "14px",
              },
            }}
          >
            {formatCurrentTime(weather?.dt)}
          </C.Text>
        </C.Flex>
        <C.Flex align="center">
          <C.Icon as={HiClock} fontSize="24px" />
          <C.Text
            ml="8px"
            fontSize={["14px", "16px"]}
            sx={{
              "@media (max-width: 690px)": {
                fontSize: "14px",
              },
            }}
          >
            {formatMessage(
              { id: "page.home.card.current-time.label.timezone" },
              { timezone: formatTimezone(weather?.timezone) }
            )}
          </C.Text>
        </C.Flex>
        <C.Flex align="center">
          <C.Icon as={MdCloud} fontSize="24px" />
          <C.Text
            ml="8px"
            fontSize={["14px", "16px"]}
            sx={{
              "@media (max-width: 690px)": {
                fontSize: "14px",
              },
            }}
          >
            {formatMessage(
              { id: "page.home.card.current-time.label.clouds" },
              { clouds: weather?.clouds.all }
            )}
          </C.Text>
        </C.Flex>
        <C.Flex align="center">
          <C.Icon as={WiHumidity} fontSize="24px" />
          <C.Text
            ml="8px"
            fontSize={["14px", "16px"]}
            sx={{
              "@media (max-width: 690px)": {
                fontSize: "14px",
              },
            }}
          >
            {formatMessage(
              { id: "page.home.card.current-time.label.humidity" },
              { humidity: weather?.main.humidity }
            )}
          </C.Text>
        </C.Flex>
      </C.Stack>
    );
  }, [
    formatMessage,
    showDetailedSkeleton,
    weather?.clouds.all,
    weather?.dt,
    weather?.main.humidity,
    weather?.name,
    weather?.sys.country,
    weather?.timezone,
  ]);

  return hasNoData ? (
    <SkeletonCard maxW={isCustomMedia ? "350px" : "auto"} />
  ) : (
    <Card
      transition={{ ...TRANSITION, delay: 0.75 }}
      highlightColor="red.400"
      maxW={isCustomMedia ? "350px" : "auto"}
      h={["auto", "unset"]}
    >
      {content}
    </Card>
  );
};

export default CurrentTimeLocaleCard;
