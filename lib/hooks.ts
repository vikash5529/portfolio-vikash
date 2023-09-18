import {
  SectionName,
  useActiveSectionContext,
} from "@/context/active-section.context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type SectionInViewProps = {
  sectionName: SectionName;
  threshold: number;
};
export default function useSectionInView({
  sectionName,
  threshold = 0.75,
}: SectionInViewProps) {
  const { ref, inView } = useInView({ threshold });

  const { setActiveSection, timeOfLastClicked } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClicked > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClicked]);

  return {
    ref,
  };
}
