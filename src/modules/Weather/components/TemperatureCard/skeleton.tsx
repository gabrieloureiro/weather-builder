import { Card } from "components";
import * as C from "@chakra-ui/react";
import { skeletonColors } from "utils/skeleton-colors";

const SkeletonTemperatureCard = () => {
  return (
    <Card h="450px" maxW="100%" mt="16px" highlightColor="transparent">
      <C.Skeleton
        mb="12px"
        h="24px"
        w="100%"
        maxW="450px"
        {...skeletonColors}
      />
      <C.Skeleton h="350px" w="100%" maxW="1128px" {...skeletonColors} />
    </Card>
  );
};

export default SkeletonTemperatureCard;
