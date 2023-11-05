import React from "react";
import { NumbersStyle } from "./style";

const Numbers = () => {
  return (
    <NumbersStyle>
      <div className='wrapper max-width'>
        <h2>
          Exhibition <br /> in numbers
        </h2>
        <div className='numbers'>
          <div>
            <b className='serif'>4</b>
            <p>section of art to discover</p>
          </div>
          <div>
            <b className='serif'>10</b>
            <p>years in making an exhibition</p>
          </div>
          <div>
            <b className='serif'>15</b>
            <p>collections of museums</p>
          </div>
          <div>
            <b className='serif'>120</b>
            <p>of Da Vinci's works and paintings</p>
          </div>
        </div>
      </div>
    </NumbersStyle>
  );
};

export default Numbers;
