import { CardProps } from "components/Card/types";
import { IconType } from "react-icons";

export type SunHoursInfoCardProps = {
  isSunrise?: boolean;
} & Omit<CardProps, "highlightColor">;
