import styled from "@emotion/styled";
import { motion } from "framer-motion";
import * as C from "@chakra-ui/react";

const MotionBox = motion<Omit<C.BoxProps, "transition">>(C.Box);

export const Card = styled(MotionBox)`
  transition: background-color 0.2s ease, border-color 0.2s ease;
`;
