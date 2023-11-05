import React, { useLayoutEffect } from "react";
import { WhatToSeeStyle } from "./style";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useMedia } from "@/hooks/useMedia";
gsap.registerPlugin(ScrollTrigger);

const WhatToSee = () => {
  const isTablet = useMedia("(min-width: 768px)");

  const slides = [
    {
      img: "/assets/images/slider/1.jpg",
      info: {
        time: "1503 - 1506",
        name: "Mona Lisa",
        text: "The “Gioconda” or Mona Lisa, probably the most famous portrait in the world.The woman depicted is Lisa Gherardini, i.e. “Mona” (short for “Madonna” , “Signora”), the wife of the noble Florentine merchant Francesco del Giocondo (thus the term “Gioconda” is also used).",
      },
    },
    {
      img: "/assets/images/slider/2.jpg",
      info: {
        time: "1490 - 1497",
        name: "La Belle Ferronnière",
        text: "Leonardo had painted a portrait of Sforza's previous mistress, Cecilia The painting is also known as 'La Belle Ferronnière,' after the headband with a jewel worn by the subject. ",
      },
    },
    {
      img: "/assets/images/slider/3.jpg",
      info: {
        time: "1492 - 1506",
        name: "Virgin of the Rocks",
        text: "This mysterious painting by Leonardo da Vinci shows the Virgin, Christ, Saint John, and an angel in a dark landscape, which is what makes the image so striking and so unusual",
      },
    },
    {
      img: "/assets/images/slider/4.jpg",
      info: {
        time: "1513 - 1516",
        name: "Saint John the Baptist",
        text: "It is believed to be Leonardo’s last painting. The pointing gesture  Many people are critical of this work, because St. John seems almost to be a hermaphrodite. ",
      },
    },
    {
      img: "/assets/images/slider/5.jpg",
      info: {
        time: "1503 - 1519",
        name: "Madonna and Saint Anne",
        text: "Saint Anne, the Virgin Mary and the Infant Jesus – three generations, two the fruit of immaculate conception – are portrayed in a landscape.",
      },
    },
  ];

  useLayoutEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".what-will-you-see-wrapper",
          scrub: 1,
          pin: true,
          start: "top top",
          end: "+=2600 top",
        },
      });
      timeline.fromTo(
        ".what-will-you-see-slider",
        {
          transform: "translateX(35%)",
        },
        {
          transform: "translateX(-18%)",
        }
      );
      return () => {
        timeline.kill();
      };
    }
  }, []);

  return (
    <WhatToSeeStyle className='what-will-you-see-wrapper'>
      <div className='text max-width'>
        <h2>What will you see?</h2>
        <p>
          The museum is seizing the opportunity in this year of commemorations
          to gather as many of the artist’s paintings as possible around the
          <span className='accent'> five core works</span> in its collection.
        </p>

        <div className='scroll-right'>
          <span>Swipe right</span>
          <Image
            src='/assets/icons/arrow-right.svg'
            alt=''
            width={40}
            height={40}
          />
        </div>
      </div>
      <div className='slider what-will-you-see-slider'>
        {slides.map((slide, i) => (
          <div className='slide' key={i}>
            <Image src={slide.img} alt='' width={500} height={500} />
            <div className='text'>
              <span>{slide.info.time}</span>
              <h3 className='serif'>{slide.info.name}</h3>
              <p>{slide.info.text}</p>
            </div>
          </div>
        ))}
      </div>
    </WhatToSeeStyle>
  );
};

export default WhatToSee;
