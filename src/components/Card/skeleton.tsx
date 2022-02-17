import { skeletonColors } from "utils/skeleton-colors";
import * as C from "@chakra-ui/react";

const SkeletonCard: React.VFC<C.BoxProps> = ({
  maxW = "350px",
  h = "200px",
  ...rest
}) => {
  return (
    <C.Skeleton
      flex="1"
      maxW={maxW}
      h={h}
      borderRadius="8px"
      {...rest}
      {...skeletonColors}
    />
  );
};

export default SkeletonCard;
