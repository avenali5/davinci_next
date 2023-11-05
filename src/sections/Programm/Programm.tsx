import React from "react";
import { ProgrammStyle } from ".";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useMedia } from "@/hooks/useMedia";

const Programm = () => {
  const isTablet = useMedia("(min-width: 768px)");

  return (
    <ProgrammStyle>
      <div className='max-width'>
        <h2>Programm</h2>
        <div className='steps'>
          <Swiper
            slidesPerGroup={isTablet ? 4 : 1}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            <SwiperSlide className='first'>
              <div className='number'>
                <div className='line' />
                <span>1</span>
              </div>
              <div className='text'>
                <h3 className='serif'>‘Light, shade, relief ’</h3>
                <p>
                  This section highlights Leonardo’s early Florentine period and
                  his years as an apprentice to one of the 15th century’s lauded
                  Italian sculptors.{" "}
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className='second'>
              <div className='number'>
                <div className='prev-line' />
                <div className='line' />
                <span>2</span>
              </div>
              <div className='text'>
                <h3 className='serif'>‘Freedom’</h3>
                <p>
                  This section of the exhibit shows a Leonardo coming into his
                  own as an artist, exploring new artistic paths and techniques
                  from around 1478.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className='third'>
              <div className='number'>
                <div className='prev-line' />
                <div className='line' />
                <span>3</span>
              </div>
              <div className='text'>
                <h3 className='serif'>‘Science’</h3>
                <p>
                  In this section, Leonardo’s studies, notebooks filled with
                  ideas and drawings for inventions make up this fascinating
                  section.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className='fourth'>
              <div className='number'>
                <div className='prev-line' />
                <span>4</span>
              </div>
              <div className='text'>
                <h3 className='serif'>‘Life’</h3>
                <p>
                  Leonardo’s mature period as a painter is the subject of this
                  section. It explores his anatomical principles to techniques
                  of painting that aim to express “divine science”.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </ProgrammStyle>
  );
};

export default Programm;
