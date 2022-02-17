import { Card } from "components";
import * as C from "@chakra-ui/react";
import { skeletonColors } from "utils/skeleton-colors";

const SkeletonCurrentWeatherCard = () => {
  return (
    <Card highlightColor="transparent">
      <C.Center flexDirection="column">
        <C.Skeleton
          h="100px"
          maxW="100px"
          w="100%"
          borderRadius="12px"
          {...skeletonColors}
        />
        <C.Skeleton
          my="6px"
          h="27px"
          maxW="100px"
          w="100%"
          {...skeletonColors}
        />
        <C.Skeleton h="21px" maxW="100px" w="100%" {...skeletonColors} />
      </C.Center>
    </Card>
  );
};

export default SkeletonCurrentWeatherCard;
