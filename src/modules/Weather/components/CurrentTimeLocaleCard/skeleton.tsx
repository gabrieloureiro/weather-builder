import * as C from "@chakra-ui/react";
import { skeletonColors } from "utils/skeleton-colors";

const SkeletonCurrentTimeLocaleCard = () => {
  return (
    <C.Stack spacing="16px">
      <C.Skeleton w="100%" h="24px" {...skeletonColors} />
      <C.Skeleton w="100%" h="24px" {...skeletonColors} />
      <C.Skeleton w="100%" h="24px" {...skeletonColors} />
      <C.Skeleton w="100%" h="24px" {...skeletonColors} />
    </C.Stack>
  );
};

export default SkeletonCurrentTimeLocaleCard;
