import React from "react";
import { HeroStyle } from "./style";
import Image from "next/image";
import Button from "@/components/Button/Button";

const Hero = () => {
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
        <h2 className='serif'>Leonardo Da Vinci</h2>
        <p>
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
