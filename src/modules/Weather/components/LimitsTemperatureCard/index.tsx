import { Card, SkeletonCard } from "components";
import * as C from "@chakra-ui/react";
import { useWeatherContent } from "modules/Weather/context";
import { formatTemperature } from "modules/Weather/utils";
import { useLanguage } from "context";
import { ImArrowDown, ImArrowUp } from "react-icons/im";
import { GiPlainCircle } from "react-icons/gi";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useIntl } from "react-intl";
import React, { useCallback, useMemo } from "react";
import SkeletonLimitsTemperatureCard from "./skeleton";
import { TRANSITION } from "animations";

const LimitsTemperatureCard: React.VFC = () => {
  const { weather, isLoading, isFetching, isFetched, isError } =
    useWeatherContent();
  const { currentLocale } = useLanguage();
  const { formatMessage } = useIntl();

  const showDetailedSkeleton = (isLoading || isFetching) && !isFetched;

  const hasNoData = isError || !weather;

  const CustomTooltip = useCallback(
    ({ active, payload }) => {
      if (active && payload && payload.length) {
        return (
          <C.Stack bg="gray.900" spacing="6px" p="12px" borderRadius="12px">
            <C.Flex align="center">
              <C.Icon
                as={ImArrowDown}
                fontSize="16px"
                mr="4px"
                color="red.400"
              />
              <C.Text color="red.400" fontSize={["12px", "14px"]}>
                {formatMessage(
                  { id: "page.home.chart.current-temperature.tooltip.min" },
                  {
                    tempMin: formatTemperature(payload[0].value, currentLocale),
                  }
                )}
              </C.Text>
            </C.Flex>
            <C.Flex align="center">
              <C.Icon
                as={ImArrowUp}
                mr="4px"
                fontSize="16px"
                color="green.400"
              />
              <C.Text color="green.400" fontSize={["12px", "14px"]}>
                {formatMessage(
                  { id: "page.home.chart.current-temperature.tooltip.max" },
                  {
                    tempMax: formatTemperature(payload[1].value, currentLocale),
                  }
                )}
              </C.Text>
            </C.Flex>
            <C.Flex align="center">
              <C.Icon
                as={GiPlainCircle}
                mr="4px"
                fontSize="16px"
                color="yellow.400"
              />
              <C.Text color="yellow.400" fontSize={["12px", "14px"]}>
                {formatMessage(
                  {
                    id: "page.home.chart.current-temperature.tooltip.feelsLike",
                  },
                  {
                    feelsLike: formatTemperature(
                      payload[2].value,
                      currentLocale
                    ),
                  }
                )}
              </C.Text>
            </C.Flex>
          </C.Stack>
        );
      }

      return null;
    },
    [currentLocale, formatMessage]
  );

  const content = useMemo(() => {
    const data = [
      {
        name: formatMessage({
          id: "page.home.chart.current-temperature.label",
        }),
        tempMin: weather?.main.temp_min,
        tempMax: weather?.main.temp_max,
        feelsLike: weather?.main.feels_like,
      },
    ];

    if (showDetailedSkeleton) {
      return <SkeletonLimitsTemperatureCard />;
    }
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={CustomTooltip} />
          <Bar dataKey="tempMin" fill="#F56565" />
          <Bar dataKey="tempMax" fill="#48BB78" />
          <Bar dataKey="feelsLike" fill="#ECC94B" />
        </BarChart>
      </ResponsiveContainer>
    );
  }, [
    CustomTooltip,
    formatMessage,
    showDetailedSkeleton,
    weather?.main.feels_like,
    weather?.main.temp_max,
    weather?.main.temp_min,
  ]);

  return hasNoData ? (
    <SkeletonCard />
  ) : (
    <Card
      transition={{ ...TRANSITION, delay: 0.95 }}
      highlightColor="yellow.400"
    >
      {content}
    </Card>
  );
};

export default LimitsTemperatureCard;
