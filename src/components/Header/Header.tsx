import React from "react";
import { HeaderStyle } from "./style";
import Image from "next/image";
import Button from "../Button/Button";

const Header = () => {
  const handleMenu = () => {
    const menu = document.querySelector(".menu-wrapper");
    menu?.classList.add("open");
  };
  return (
    <HeaderStyle>
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
        <div className='burguer' onClick={handleMenu}>
          <Image src='/assets/icons/burguer.svg' alt='' width={30} height={8} />
        </div>
      </div>
    </HeaderStyle>
  );
};

export default Header;
