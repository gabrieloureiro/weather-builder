import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Gradient = styled(motion.aside)`
  max-width: 100%;
  height: 54px;
  align-self: flex-start;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(90deg, #f56565 20%, #ecc94b 40%, #0bc5ea 100%);
`;
