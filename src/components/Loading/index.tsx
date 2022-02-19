import * as C from "@chakra-ui/react";
import { skeletonColors } from "utils/skeleton-colors";

const Loading = () => {
  return (
    <C.HStack justify="center" align="center" w="100%" h="100vh" spacing="8px">
      <C.Skeleton w="100%" maxW="29px" h="35px" {...skeletonColors} />
      <C.Skeleton w="100%" maxW="29px" h="60px" {...skeletonColors} />
      <C.Skeleton w="100%" maxW="29px" h="85px" {...skeletonColors} />
    </C.HStack>
  );
};

export default Loading;
