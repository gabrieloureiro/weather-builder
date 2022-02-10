import * as C from "@chakra-ui/react";

export type TemperatureCardProps = {
  temp: number;
  tempMin: number;
  tempMax: number;
  feelsLike: number;
  humidity: number;
  pressure: number;
  isLoading: boolean;
  isFetching: boolean;
  isFetched: boolean;
  isError: boolean;
} & C.BoxProps;
