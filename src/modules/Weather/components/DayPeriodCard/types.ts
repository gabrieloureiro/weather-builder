import * as C from "@chakra-ui/react";
import { QueryEffects } from "types";

export type DayPeriodCardProps = {
  temp: number;
  tempMin: number;
  tempMax: number;
  feelsLike: number;
  humidity: number;
  pressure: number;
} & C.BoxProps &
  QueryEffects;
