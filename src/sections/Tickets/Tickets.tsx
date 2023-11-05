import React, { useEffect, useState } from "react";
import { TicketsStyle } from "./style";
import Button from "@/components/Button/Button";
import Image from "next/image";
import Modal from "@/components/Modal/Modal";

const Tickets = () => {
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [generalTick, setGeneralTick] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(generalTick * 17);

    if (generalTick === 69) {
      alert("Nice");
    }
  }, [generalTick]);

  const decreaseGeneralTick = () => {
    if (generalTick > 0) {
      setGeneralTick(prevGeneralTick => prevGeneralTick - 1);
    }
  };

  const increaseGeneralTick = () => {
    setGeneralTick(prevGeneralTick => prevGeneralTick + 1);
  };

  const handleModal = () => {
    const modal = document.querySelector(".modal-wrapper");
    modal?.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  return (
    <TicketsStyle>
      <div className='max-width'>
        <h2>Choose your tickets</h2>

        <div className='date-time' onClick={handleModal}>
          <Image
            src='/assets/images/calendar.svg'
            alt=''
            width={100}
            height={100}
          />
          <span>Choose date and time for your visit</span>
        </div>

        <div className='tickets'>
          <div>
            <span>General admission</span>
            <div className='sum'>
              <button onClick={decreaseGeneralTick}>-</button>
              <span>{generalTick}</span>
              <button onClick={increaseGeneralTick}>+</button>
            </div>
            <b className='price'>17€</b>
          </div>
          <div>
            <span>Under 18s</span>
            <div className='sum'>
              <button>-</button>
              <span>0</span>
              <button>+</button>
            </div>
            <b className='price'>Free</b>
          </div>

          <div className='total'>
            <span>Total {totalPrice}€ </span>
            <Button text='BUY NOW' />
          </div>
        </div>
      </div>
      <Modal />
    </TicketsStyle>
  );
};

export default Tickets;
