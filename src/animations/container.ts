import { TRANSITION } from "./transition";

export const CONTAINER_ANIMATION = {
  unMounted: { y: -50, opacity: 0 },
  mounted: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.15,
      when: "beforeChildren",
      staggerChildren: 0.2,
      ...TRANSITION,
    },
  },
};
