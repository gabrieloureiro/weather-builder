import * as S from "./styles";
import * as C from "@chakra-ui/react";

import { CARDS_ANIMATION, TRANSITION } from "animations";
import { CardProps } from "./types";

const Card: React.FC<CardProps> = ({
  children,
  maxW = "350px",
  h = "200px",
  highlightColor,
  ...rest
}) => {
  return (
    <S.Card
      flex="1"
      maxW={maxW}
      h={h}
      p="24px"
      borderRadius="8px 8px 0 0"
      bg="gray.700"
      border="2px solid"
      borderColor="transparent"
      borderBottomColor={highlightColor}
      _hover={{
        borderColor: highlightColor,
      }}
      variants={CARDS_ANIMATION}
      transition={TRANSITION}
      initial="unMounted"
      animate="mounted"
      exit="unMounted"
      {...rest}
    >
      {children}
    </S.Card>
  );
};

export default Card;
