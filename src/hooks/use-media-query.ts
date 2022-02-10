import * as C from "@chakra-ui/react";

type UseMediaQueryProps = {
  isDesktop: boolean;
  isMobile: boolean;
};

export const useMediaQuery = (): UseMediaQueryProps => {
  const [isDesktop] = C.useMediaQuery("(min-width: 768px)");
  const [isMobile] = C.useMediaQuery("(max-width: 768px)");

  return { isDesktop, isMobile };
};
