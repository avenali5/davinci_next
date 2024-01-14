import React, { useLayoutEffect } from "react";
import { HeaderStyle } from "./style";
import Image from "next/image";
import Button from "../Button/Button";
import gsap from "gsap";

const Header = () => {
  const handleMenu = () => {
    const menu = document.querySelector(".menu-wrapper");
    menu?.classList.add("open");
  };

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      delay: 0.7,
    });

    tl.to(".header-container", {
      opacity: 1,
      transform: "translateY(0%)",
      duration: 1,
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <HeaderStyle className='header-container'>
      <div className='wrapper'>
        <div className='logo'>
          <h4 className='serif'>Louvre</h4>S
        </div>
        <div className='location'>
          <Image
            src='/assets/icons/location.svg'
            height={40}
            width={40}
            alt=''
          />{" "}
          Paris, France
        </div>
        <div className='button-wrapper'>
          <Button text='BUY YOUR TICKET' />
        </div>
        <button className='burguer' onClick={handleMenu}>
          <Image src='/assets/icons/burguer.svg' alt='' width={30} height={8} />
        </button>
      </div>
    </HeaderStyle>
  );
};

export default Header;
