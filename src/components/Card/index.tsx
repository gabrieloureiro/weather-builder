import * as S from "./styles";

import { CARDS_ANIMATION, TRANSITION } from "animations";

const Card: React.FC<{ highlightColor: string }> = ({
  children,
  highlightColor,
}) => {
  return (
    <S.Card
      w="100%"
      maxW="350px"
      h="450px"
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
    <S.MotionSkeleton
      w="100%"
      maxW="350px"
      h="450px"
      borderRadius="8px"
      startColor="gray.700"
      endColor="gray.600"
      variants={CARDS_ANIMATION}
      transition={TRANSITION}
      initial="unMounted"
      animate="mounted"
      exit="unMounted"
    />
  );
};

export { Card, SkeletonCard };
