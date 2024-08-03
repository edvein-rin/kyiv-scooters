import { useEffect, useState } from "react";

const getMatches = (query: string): boolean | undefined => {
  if (typeof window !== "undefined") {
    return window.matchMedia(query).matches;
  }
  return undefined;
};

export const useMediaQuery = (query: string): boolean | undefined => {
  const [matches, setMatches] = useState<boolean | undefined>(
    getMatches(query)
  );

  useEffect(() => {
    const handleChange = () => {
      setMatches(getMatches(query));
    };

    const matchMedia = window.matchMedia(query);
    handleChange();
    matchMedia.addEventListener("change", handleChange);

    return () => {
      matchMedia.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
};
