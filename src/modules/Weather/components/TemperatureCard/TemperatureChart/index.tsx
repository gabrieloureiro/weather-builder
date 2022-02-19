import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import * as C from "@chakra-ui/react";
import { useForecastContent } from "modules/Weather/context";
import { formatTemperature } from "modules/Weather/utils";
import { useIntl } from "react-intl";
import { useLanguage } from "context";

const TemperatureChart: React.VFC = () => {
  const { forecast } = useForecastContent();
  const { currentLocale } = useLanguage();
  const { formatMessage } = useIntl();

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <C.Stack bg="gray.900" spacing="6px" p="12px" borderRadius="12px">
          <C.Text color="red.400" fontSize={["12px", "14px"]}>
            {formatMessage(
              { id: "page.home.chart.temperature.tooltip.max" },
              { tempMax: formatTemperature(payload[2].value, currentLocale) }
            )}
          </C.Text>
          <C.Text color="yellow.400" fontSize={["12px", "14px"]}>
            {formatMessage(
              { id: "page.home.chart.temperature.tooltip.current" },
              {
                currentTemp: formatTemperature(payload[1].value, currentLocale),
              }
            )}
          </C.Text>
          <C.Text color="cyan.400" fontSize={["12px", "14px"]}>
            {formatMessage(
              { id: "page.home.chart.temperature.tooltip.min" },
              { tempMin: formatTemperature(payload[0].value, currentLocale) }
            )}
          </C.Text>
        </C.Stack>
      );
    }

    return null;
  };

  return (
    <C.Box>
      <ResponsiveContainer width="100%" height="100%" minHeight={350}>
        <AreaChart
          height={300}
          data={forecast?.list}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="dt_txt" />
          <YAxis />
          <Tooltip content={CustomTooltip} />
          <Area
            stackId="1"
            type="monotone"
            dataKey="main.temp_min"
            stroke="#0BC5EA"
            fill="#0BC5EA"
          />
          <Area
            stackId="1"
            type="monotone"
            dataKey="main.temp"
            stroke="#ECC94B"
            fill="#ECC94B"
          />
          <Area
            label="max"
            stackId="1"
            type="monotone"
            dataKey="main.temp_max"
            stroke="#F56565"
            fill="#F56565"
          />
        </AreaChart>
      </ResponsiveContainer>
    </C.Box>
  );
};

export default TemperatureChart;
