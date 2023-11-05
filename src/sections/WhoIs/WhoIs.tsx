import React, { useState } from "react";
import { WhoIsStyle } from "./style";
import Image from "next/image";

const WhoIs = () => {
  const [selected, setSelected] = useState(1);
  const [loader, setLoader] = useState(true);
  return (
    <WhoIsStyle>
      <div className='wrapper max-width'>
        <div className='top'>
          <Image
            src='/assets/images/leonardo-to-do.png'
            alt=''
            width={400}
            height={400}
          />
          <h2>
            Who is <br /> <span className='serif'>Leonardo?</span>
          </h2>
        </div>

        <div className='to-do'>
          <div>
            <h4 className='serif'>to do list:</h4>
            <div className='list'>
              <div
                onClick={() => {
                  setSelected(1);
                  setLoader(true);
                }}
              >
                <div className='radio-input'>
                  {selected === 1 && <div className='ball'></div>}
                </div>
                <span>paint the most recognised painting in the world </span>
              </div>
              <div
                onClick={() => {
                  setSelected(2);
                  setLoader(true);
                }}
              >
                <div className='radio-input'>
                  {selected === 2 && <div className='ball'></div>}
                </div>
                <span>become the epitome of Rénassance</span>
              </div>
              <div
                onClick={() => {
                  setSelected(3);
                  setLoader(true);
                }}
              >
                <div className='radio-input'>
                  {selected === 3 && <div className='ball'></div>}
                </div>
                <span>invent a flying machine, parachute and harp</span>
              </div>
              <div
                onClick={() => {
                  setSelected(4);
                  setLoader(true);
                }}
              >
                <div className='radio-input'>
                  {selected === 4 && <div className='ball'></div>}
                </div>
                <span>become friends with french king Francois I</span>
              </div>
            </div>
          </div>

          <div className='image'>
            {loader && <div className='image-loader' />}
            <Image
              onLoad={() => setLoader(false)}
              src={
                selected === 1
                  ? "/assets/gifs/mona.gif"
                  : selected === 2
                  ? "/assets/gifs/ranassance.gif"
                  : selected === 3
                  ? "/assets/gifs/machine.gif"
                  : selected === 4
                  ? "/assets/gifs/king.gif"
                  : ""
              }
              alt=''
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </WhoIsStyle>
  );
};

export default WhoIs;
