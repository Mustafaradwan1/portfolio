import { useActiveSectionContext } from "@/Context/ContextProvider";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
export function useSectionInView(sectionName: string, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveData, OnClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - OnClick > 1000) {
      setActiveData(sectionName);
    }
  }, [inView, setActiveData, OnClick, sectionName]);

  return {
    ref,
  };
}