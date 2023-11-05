import React from "react";
import { MenuStyle } from "./style";

const Menu = () => {
  const handleMenu = () => {
    const menu = document.querySelector(".menu-wrapper");
    menu?.classList.remove("open");
  };
  return (
    <MenuStyle className='menu-wrapper'>
      <div className='container max-width'>
        <header>
          <h4 className='serif'>Lovure</h4>
          <div className='close serif' onClick={handleMenu}>
            Close X
          </div>
        </header>

        <ul>
          <li className='serif'>
            About <span>About exhibition</span>
          </li>
          <li className='serif'>
            Programm <span>What to expect</span>
          </li>
          <li className='serif'>
            Tickets <span>Choose your tickets</span>
          </li>
          <li className='serif'>
            Contacts <span>How to get to us</span>
          </li>
        </ul>
      </div>
    </MenuStyle>
  );
};

export default Menu;
