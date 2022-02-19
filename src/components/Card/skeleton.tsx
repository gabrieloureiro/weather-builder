import { skeletonColors } from "utils/skeleton-colors";
import * as C from "@chakra-ui/react";
import { useMediaQuery } from "hooks/use-media-query";

const SkeletonCard: React.VFC<C.BoxProps> = ({
  maxW = "350px",
  h = "200px",
  ...rest
}) => {
  const { isDesktop } = useMediaQuery();
  return (
    <C.Skeleton
      w="100%"
      maxW={isDesktop ? maxW : "auto"}
      h={h}
      borderRadius="8px"
      {...rest}
      {...skeletonColors}
    />
  );
};

export default SkeletonCard;
