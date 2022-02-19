import styled from "@emotion/styled";
import { motion } from "framer-motion";
import * as C from "@chakra-ui/react";

const MotionButton = motion<Omit<C.ButtonProps, "transition">>(C.Button);

export const Button = styled(MotionButton)`
  transition: border-color 0.2s ease;
`;
