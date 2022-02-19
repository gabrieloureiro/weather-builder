import * as C from "@chakra-ui/react";
import { Transition, Variants } from "framer-motion";

export type CardProps = {
  highlightColor: string;
  variants?: Variants;
  transition?: Transition;
} & Omit<
  C.BoxProps,
  "transition" | "onAnimationStart" | "onDragStart" | "onDragEnd" | "onDrag"
>;
