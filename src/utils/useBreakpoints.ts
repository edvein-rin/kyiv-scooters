import { useMemo } from "react";
import { useMediaQuery } from "./useMediaQuery";

export const useBreakpoints = (): { isMobile: boolean; isDesktop: boolean } => {
  const isDesktop = useMediaQuery("screen and (min-width: 1024px)") ?? false;
  const isMobile = !isDesktop;

  return useMemo(
    () => ({
      isMobile,
      isDesktop,
    }),
    [isDesktop, isMobile]
  );
};
