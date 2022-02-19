import * as C from "@chakra-ui/react";
import { Card, SkeletonCard } from "components";
import { useWeatherContent } from "modules/Weather/context";
import { formatCurrentTime, formatTimezone } from "modules/Weather/utils";
import { HiClock } from "react-icons/hi";
import { MdLocationOn, MdCloud } from "react-icons/md";
import { IoMdCalendar } from "react-icons/io";
import { useMemo } from "react";
import SkeletonCurrentTimeLocaleCard from "./skeleton";

const CurrentTimeLocaleCard = () => {
  const { weather, isLoading, isFetching, isFetched, isError } =
    useWeatherContent();
  const [isCustomMedia] = C.useMediaQuery("(min-width: 1104px)");

  const showDetailedSkeleton = (isLoading || isFetching) && !isFetched;

  const content = useMemo(() => {
    if (showDetailedSkeleton) {
      return <SkeletonCurrentTimeLocaleCard />;
    }

    if (isError) {
      return <SkeletonCard />;
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
            Cobertura de nuvens: {weather?.clouds.all}%
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
            Fuso horário: {formatTimezone(weather?.timezone)}
          </C.Text>
        </C.Flex>
      </C.Stack>
    );
  }, [
    isError,
    showDetailedSkeleton,
    weather?.clouds.all,
    weather?.dt,
    weather?.name,
    weather?.sys.country,
    weather?.timezone,
  ]);

  return (
    <Card
      highlightColor="red.400"
      maxW={isCustomMedia ? "350px" : "auto"}
      h={["auto", "unset"]}
    >
      {content}
    </Card>
  );
};

export default CurrentTimeLocaleCard;
