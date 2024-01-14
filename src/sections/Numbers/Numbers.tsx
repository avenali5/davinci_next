import React, { useLayoutEffect } from "react";
import { NumbersStyle } from "./style";
import gsap from "gsap";

const Numbers = () => {
  useLayoutEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".numbers-wrapper",
        start: "top center",
      },
    });

    timeline.to(".numbers-wrapper .numbers div", {
      stagger: 0.3,
      duration: 1.4,
      opacity: 1,
      transform: "translateY(0%)",
      ease: "expo.out",
    });

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <NumbersStyle className='numbers-wrapper'>
      <div className='wrapper max-width'>
        <h2>
          Exhibition <br /> in numbers
        </h2>
        <div className='numbers'>
          <div>
            <div className='wrap'>
              <b className='serif'>4</b>
            </div>
            <p>section of art to discover</p>
          </div>
          <div>
            <b className='serif'>10</b>
            <p>years in making an exhibition</p>
          </div>
          <div>
            <b className='serif'>15</b>
            <p>collections of museums</p>
          </div>
          <div>
            <b className='serif'>120</b>
            <p>of Da Vinci's works and paintings</p>
          </div>
        </div>
      </div>
    </NumbersStyle>
  );
};

export default Numbers;
