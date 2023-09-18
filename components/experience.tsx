"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { Fragment } from "react";
import { useSectionInView } from "@/lib/hooks";
import { useThemeContext } from "@/context/theme.context";

export default function Experience() {
  const { ref } = useSectionInView({
    sectionName: "Experience",
    threshold: 0.75,
  });
  const { theme } = useThemeContext();
  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => {
          return (
            <Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background:
                    theme === "light" ? "#f3f4f6" : "rgba(255,255,255,0.05)",
                  boxShadow: "none",
                  border: "1px solid rgba(0,0,0,0.05)",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight:
                    theme !== "light"
                      ? "0.4rem solid rgba(255,255,255,0.05)"
                      : "0.4rem solid #9ca3af",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{ background: theme==="light" ? "white" :"rgba(255,255,255,0.05)", fontSize: "1.5rem" }}
              >
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <h3 className="font-normal !mt-0">{item.location}</h3>
                <h3 className="!mt-0 font-normal text-gray-700 dark:text-white/75">
                  {item.description}
                </h3>
              </VerticalTimelineElement>
            </Fragment>
          );
        })}
      </VerticalTimeline>
    </section>
  );
}
