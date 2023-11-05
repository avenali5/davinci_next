import React, { useLayoutEffect } from "react";
import { SectionTrackerStyle } from "./SectionTracker.style";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const SectionTracker = () => {
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-tracker",
        scrub: true,
        // pin: true,
        start: "top top",
        endTrigger: "body",
        end: "bottom bottom",
        // markers: true,
      },
    });
    tl.fromTo(
      ".section-tracker .bar",
      {
        width: 0,
      },
      {
        width: "100%",
      }
    );
    return () => {
      tl.kill();
    };
  }, []);
  return (
    <SectionTrackerStyle className='section-tracker'>
      {/* <span>0</span> */}
      <div className='line'>
        <div className='bar' />
      </div>
      {/* <span>10</span> */}
    </SectionTrackerStyle>
  );
};

export default SectionTracker;
