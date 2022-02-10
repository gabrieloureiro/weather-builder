import * as S from "./styles";
import * as C from "@chakra-ui/react";

import { CARDS_ANIMATION, TRANSITION } from "animations";
import { skeletonColors } from "utils/skeleton-colors";

const Card: React.FC<{ highlightColor: string }> = ({
  children,
  highlightColor,
}) => {
  return (
    <S.Card
      w="100%"
      maxW="350px"
      h="450px"
      m="0 auto"
      p="24px"
      borderRadius="8px 8px 0 0"
      bg="gray.700"
      border="2px solid"
      borderColor="transparent"
      borderBottomColor={highlightColor}
      _hover={{
        bg: "gray.600",
        borderColor: highlightColor,
      }}
      variants={CARDS_ANIMATION}
      transition={TRANSITION}
      initial="unMounted"
      animate="mounted"
      exit="unMounted"
    >
      {children}
    </S.Card>
  );
};

const SkeletonCard: React.VFC = () => {
  return (
    <C.Skeleton
      w="100%"
      m="0 auto"
      maxW="350px"
      h="450px"
      borderRadius="8px"
      {...skeletonColors}
    />
  );
};

export { Card, SkeletonCard };
