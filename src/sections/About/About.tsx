import React, { useLayoutEffect } from "react";
import { AboutStyle } from "./style";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useLayoutEffect(() => {
    const elements = document.querySelectorAll(".into-brain span");
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".into-brain",
        start: "top center",
        end: "bottom top+=300",
        scrub: 2,
      },
    });

    elements.forEach(element => {
      timeline.fromTo(
        element,
        {
          opacity: 0.1,
        },
        {
          opacity: 1,
        }
      );
    });

    return () => {
      timeline.kill();
    };
  }, []);
  return (
    <AboutStyle>
      <div className='wrapper max-width'>
        <h2 className='serif'>About</h2>
        <p className='first-p'>
          It took more than a decade to prepare and was almost thwarted by a
          diplomatic row. Now, one of the world's most expensive art exhibitions
          is finally opening to the public.
          <br /> <br />
          It took more than a decade to prepare and was almost thwarted by a
          diplomatic row. Now, one of the world's most expensive art exhibitions
          is finally opening to the public The exhibition, which is expected to
          attract more than half a million visitors over the next four months,
          aims to provide a deeper understanding of the artist's working methods
          using his notebooks, infrared imaging technology and virtual reality.
        </p>
        <div className='images'>
          <div className='image-container first'>
            <Image
              className='about1'
              src='/assets/images/about1.jpg'
              alt=''
              height={500}
              width={500}
            />
          </div>
          <div className='image-container second'>
            <Image
              className='about2'
              src='/assets/images/about2.jpg'
              alt=''
              height={500}
              width={500}
              priority
              style={{ border: "none" }}
            />
          </div>
        </div>
        <h3 className='cite serif into-brain'>
          <Image
            src='/assets/icons/quotes.svg'
            alt=''
            width={100}
            height={100}
          />
          <div>
            <span>You</span>
            <span>can</span>
            <span>really</span>
            <span>get</span>
            <span>into</span>
            <span>his</span>
            <span>brain</span>
            <span>and</span>
            <span>try</span>
            <span>to</span>
            <span>see</span>
            <span>how</span>
            <span>he</span>
            <span>thought</span>
          </div>
        </h3>
        <p className='second-p'>
          Building on the museum's Leonardo collection – already the best in the
          world with five paintings and 22 drawings – the show has been in the
          making and will feature over 120 works, sourced from some of the most
          prestigious european and american institutions
          <br />
          <br />
          The works – paintings, drawings, manuscripts, sculptures and artifacts
          – will be displayed in the museum's Napoleon Hall for four months
          starting October 24, and end December 24.
        </p>
      </div>
    </AboutStyle>
  );
};

export default About;
