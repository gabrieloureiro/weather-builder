import * as S from "./styles";

import { CardProps } from "./types";
import { useMediaQuery } from "hooks/use-media-query";
import { CARDS_ANIMATION, TRANSITION } from "animations";

const Card: React.FC<CardProps> = ({
  children,
  maxW = "350px",
  h = "240px",
  highlightColor,
  variants = CARDS_ANIMATION,
  transition = TRANSITION,
  ...rest
}) => {
  const { isDesktop } = useMediaQuery();
  return (
    <S.Card
      w="100%"
      maxW={isDesktop ? maxW : "auto"}
      h={h}
      p={["24px 12px", "24px"]}
      borderRadius="8px 8px 0 0"
      bg="gray.700"
      border="2px solid"
      borderColor="transparent"
      borderBottomColor={highlightColor}
      _hover={{
        borderColor: highlightColor,
      }}
      variants={variants}
      transition={transition}
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
