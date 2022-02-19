import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Gradient = styled(motion.aside)`
  height: 54px;
  max-width: 100%;
  align-self: flex-start;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(90deg, #f56565 20%, #ecc94b 40%, #0bc5ea 100%);

  @media (max-width: 420px) {
    height: 16px;
  }
`;
