import { Card } from "components";
import * as C from "@chakra-ui/react";
import { skeletonColors } from "utils/skeleton-colors";

const SkeletonTemperatureCard = () => {
  return (
    <>
      <C.Skeleton
        mb="12px"
        h="24px"
        w="100%"
        maxW="450px"
        {...skeletonColors}
      />
      <C.Skeleton h="350px" w="100%" maxW="1128px" {...skeletonColors} />
    </>
  );
};

export default SkeletonTemperatureCard;
