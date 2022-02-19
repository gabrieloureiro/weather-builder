import * as C from "@chakra-ui/react";
import { skeletonColors } from "utils/skeleton-colors";

const SkeletonSunHoursInfoCard = () => {
  return (
    <C.Center flexDirection="column" h="100%">
      <C.Skeleton
        h="100px"
        maxW="100px"
        w="100%"
        borderRadius="12px"
        {...skeletonColors}
      />
      <C.Skeleton my="6px" h="18px" maxW="100px" w="100%" {...skeletonColors} />
      <C.Skeleton h="18px" maxW="100px" w="100%" {...skeletonColors} />
    </C.Center>
  );
};

export default SkeletonSunHoursInfoCard;
