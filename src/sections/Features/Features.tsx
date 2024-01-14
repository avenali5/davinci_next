import React, { useLayoutEffect } from "react";
import { FeaturesStyle } from "./style";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useMedia } from "@/hooks/useMedia";
import gsap from "gsap";

const Features = () => {
  const isTablet = useMedia("(min-width: 768px)");

  useLayoutEffect(() => {
    const sections = document.querySelectorAll(
      // ".features-wrapper .image.one .wrap"
      ".features-wrapper .image .wrap"
    );

    const timeline = gsap.timeline({});

    // sections.forEach(el => {
    //   timeline.fromTo(
    //     el,
    //     {
    //       width: 0,
    //     },
    //     {
    //       scrollTrigger: {
    //         trigger: `.features-wrapper .features ${el.tagName.toLowerCase()}`,
    //         start: "top center",
    //       },
    //       width: "100%",
    //       stagger: 0.4,
    //       duration: 1.8,
    //       ease: "expo.out",
    //     }
    //   );
    // .fromTo(
    //   `.features-wrapper .features ${el.tagName.toLowerCase()} img`,
    //   {
    //     scale: 2,
    //   },
    //   {
    //     scale: 1,
    //     duration: 1.8,
    //     ease: "expo.out",
    //   }
    // ),
    // 0;
    // });

    const elements = document.querySelectorAll(".work-method span");
    const timeline2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-method",
        start: "top center",
        end: "bottom top+=300",
        scrub: 2,
      },
    });

    elements.forEach(element => {
      timeline2.fromTo(
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
      timeline2.kill();
    };
  }, []);

  return (
    <FeaturesStyle className='features-wrapper'>
      <div className='max-width'>
        <Image
          src='/assets/images/leonardo.svg'
          alt=''
          width={400}
          height={400}
          className='leonardo'
        />
        <div className='features'>
          <Swiper
            slidesPerView={isTablet ? 3 : 1}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div>
                <div className='text'>
                  <h4 className='serif'>Notebooks and infrared technology</h4>
                  <p>
                    The exhibition provide a deeper understanding of the
                    artist's working methods using his notebooks and infrared
                    imaging technology. This technique allow us to see initial
                    Leonardo’s drafts and how he perfected his compositions.
                  </p>
                </div>
                <div className='image one'>
                  <div className='wrap'>
                    <Image
                      src='/assets/images/notebooks.jpg'
                      alt=''
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='second'>
                <div className='text'>
                  <h4 className='serif'>
                    ‘Science <br /> of painting’
                  </h4>
                  <p>
                    You will know how Leonardo placed utmost importance on
                    painting, and how his study of the world — which he referred
                    to as ‘the science of painting’ — was the vessel of an art
                    through which he sought to give life to his paintings.
                  </p>
                </div>
                <div className='image two'>
                  <div className='wrap'>
                    <Image
                      src='/assets/images/science.jpg'
                      alt=''
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className='text'>
                  <h4 className='serif'>
                    Unique <br /> documets
                  </h4>
                  <p>
                    We shed light on Leonardo’s biography through the exhaustive
                    reexamination of historical documentation, providing access
                    to his artistic universe and relationship to painting.
                  </p>
                </div>
                <div className='image three'>
                  <div className='wrap'>
                    <Image
                      src='/assets/images/documents.jpg'
                      alt=''
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className='cite work-method'>
          <Image
            src='/assets/icons/quotes.svg'
            alt=''
            width={400}
            height={400}
          />
          <div>
            <span>He</span> <span>used</span> <span>a</span> <span>very</span>
            <span>particular</span> <span>and</span> <span>original</span>
            <span>method</span> <span>of</span> <span>work</span>
            <span>based</span> <span>on</span>
            <span>science</span>
          </div>
        </div>
      </div>
    </FeaturesStyle>
  );
};

export default Features;
