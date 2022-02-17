import * as C from "@chakra-ui/react";
import { Card } from "components";
import { skeletonColors } from "utils/skeleton-colors";

const SkeletonDayPeriodCard: React.VFC = () => {
  return (
    <Card highlightColor="transparent">
      <C.Skeleton w="100%" maxW="298px" h="134.09px" {...skeletonColors} />
      <C.Flex
        flexDirection={["column", "row"]}
        justify="space-between"
        align={["center", "unset"]}
        my="16px"
      >
        <C.Skeleton w="100%" maxW="64.88px" h="24px" {...skeletonColors} />
        <C.Skeleton
          mt={["0", "8px"]}
          my={["4px", "0"]}
          w="100%"
          maxW="100.86px"
          h="63px"
          {...skeletonColors}
        />
        <C.Skeleton w="100%" maxW="64.88px" h="24px" {...skeletonColors} />
      </C.Flex>
      <C.Stack spacing="16px" mt="32px">
        <C.Skeleton w="100%" h="24px" {...skeletonColors} />
        <C.Skeleton w="100%" h="24px" {...skeletonColors} />
        <C.Skeleton w="100%" h="24px" {...skeletonColors} />
      </C.Stack>
    </Card>
  );
};

export default SkeletonDayPeriodCard;
