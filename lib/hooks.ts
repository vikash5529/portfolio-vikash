import {
  SectionName,
  useActiveSectionContext,
} from "@/context/active-section.context";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

type SectionInViewProps = {
  sectionName: SectionName;
  threshold: number;
};
function useSectionInView({
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

function useLocalStorage<T>(key: string, initialValue: T) {
  const [state, setState] = useState<T | any>(() => {
    const savedValue = window.localStorage.getItem(key);
    if (savedValue == null) {
      window.localStorage.setItem(key, initialValue as string);
      return initialValue;
    } else {
      return savedValue;
    }
  });

  const setValueAndSave = (value:T | any):void => {
    localStorage.setItem(key, value);
    setState(value);
  };

  return [state, setValueAndSave];
}

export { useSectionInView, useLocalStorage };
