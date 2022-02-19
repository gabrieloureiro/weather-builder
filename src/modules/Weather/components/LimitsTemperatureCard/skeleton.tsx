import * as C from "@chakra-ui/react";
import { skeletonColors } from "utils/skeleton-colors";

const SkeletonLimitsTemperatureCard = () => {
  return (
    <C.HStack
      justify="center"
      mt="-20px"
      align="flex-end"
      h="100%"
      spacing="8px"
    >
      <C.Skeleton w="100%" maxW="29px" h="65px" {...skeletonColors} />
      <C.Skeleton w="100%" maxW="29px" h="90px" {...skeletonColors} />
      <C.Skeleton w="100%" maxW="29px" h="105px" {...skeletonColors} />
    </C.HStack>
  );
};

export default SkeletonLimitsTemperatureCard;
