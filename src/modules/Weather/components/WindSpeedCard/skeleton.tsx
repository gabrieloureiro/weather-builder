import * as C from "@chakra-ui/react";
import { skeletonColors } from "utils/skeleton-colors";

const SkeletonWindSpeedCard = () => {
  return (
    <C.Center flexDirection="column" h="100%">
      <C.Skeleton
        w="100%"
        h="100%"
        maxH="88px"
        maxW="88px"
        {...skeletonColors}
      />
      <C.Skeleton mt="8px" w="100%" h="27px" {...skeletonColors} />
    </C.Center>
  );
};

export default SkeletonWindSpeedCard;
