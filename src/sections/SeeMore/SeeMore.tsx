import Button from "@/components/Button/Button";
import Image from "next/image";
import React from "react";
import { SeeMoreStyle } from "./style";

const SeeMore = () => {
  return (
    <SeeMoreStyle>
      <Image
        src='/assets/images/see-more.jpg'
        alt=''
        width={300}
        height={300}
        className='small'
      />
      <Image
        src='/assets/images/see-more-big.jpg'
        alt=''
        width={300}
        height={300}
        className='big'
      />
      <div className='text'>
        <h2>Do you want to see more?</h2>
        <p>
          Then book tickets now and visit the biggest Leonardo da Vinci’s
          exhibition ever! Free entry for people under 18 and special groups!
        </p>
        <Button text='BUY NOW' />
      </div>
    </SeeMoreStyle>
  );
};

export default SeeMore;
