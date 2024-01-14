import React, { useLayoutEffect } from "react";
import { HeroStyle } from "./style";
import Image from "next/image";
import Button from "@/components/Button/Button";
import gsap from "gsap";

const Hero = () => {
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      delay: 1,
      duration: 1,
    });

    tl.to(".dates", {
      opacity: 1,
      transform: "translateY(0%)",
    })
      .to(
        ".leo-title",
        {
          opacity: 1,
          transform: "translateY(0%)",
        },
        "0.1"
      )
      .to(
        ".leo-main-text",
        {
          opacity: 1,
          transform: "translateY(0%)",
        },
        "0.2"
      )
      .to(
        ".button-wrapper .links button",
        {
          stagger: 0.1,
          opacity: 1,
          transform: "translateY(0%)",
        },
        "0.3"
      );

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <HeroStyle>
      <div className='image-wrapper'>
        <div className='cover' />
        <Image
          className='hero-image small'
          src='/assets/images/hero.jpg'
          alt=''
          fill
          priority
        />
      </div>
      <div className='text'>
        <div className='dates'>
          24 OCTOBER {new Date().getFullYear()} - 24 DECEMBER{" "}
          {new Date().getFullYear()}
        </div>
        <h2 className='serif leo-title'>Leonardo Da Vinci</h2>
        <p className='leo-main-text'>
          To commemorate the 500-year death anniversary of Leonardo da Vinci,
          the Musée du Louvre is holding a major retrospective of the painter’s
          career
        </p>
        <div className='button-wrapper'>
          <div className='links'>
            <button>Programm</button>
            <button>Learn more</button>
            <button>Contacts</button>
          </div>
          <Button className='primary-button' text='BUY YOUR TICKET' />
        </div>
      </div>
    </HeroStyle>
  );
};

export default Hero;
