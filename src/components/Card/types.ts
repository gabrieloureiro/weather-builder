import * as C from "@chakra-ui/react";

export type CardProps = {
  highlightColor: string;
} & Omit<
  C.BoxProps,
  "transition" | "onAnimationStart" | "onDragStart" | "onDragEnd" | "onDrag"
>;
