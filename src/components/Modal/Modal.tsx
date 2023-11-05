import React, { useState } from "react";
import { ModalStyle } from "./style";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../Button/Button";

const Modal = () => {
  const [saved, setSaved] = useState<boolean>(false);
  const [date, setDate] = useState<Date | number>(
    new Date("October 24, 2023").setHours(9, 0, 0)
  );

  const handleSave = () => {
    setSaved(true);
  };

  const handleConfirm = () => {
    const modal = document.querySelector(".modal-wrapper");
    modal?.classList.remove("open");
    document.body.style.overflow = "auto";
  };

  const handleChange = () => {
    setSaved(false);
  };

  return (
    <ModalStyle className='modal-wrapper'>
      <div className='card'>
        {saved ? (
          <div className='saved'>
            <h3 className='serif'>Confirm your date and time</h3>
            <b>Day</b>:{" "}
            {` ${new Date(date).toLocaleString("en-uk", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}`}
            <br />
            <b>Time</b>:{" "}
            {` ${new Date(date).toLocaleString("en-uk", {
              hour: "2-digit",
              minute: "2-digit",
            })}`}
            <div className='buttons'>
              <span onClick={handleChange}>CHANGE</span>
              <Button text='CONFIRM' onClick={handleConfirm} />
            </div>
          </div>
        ) : (
          <div>
            <h2>Pick a date and time</h2>

            <div className='inputs'>
              <div className='date'>
                {/* @ts-expect-error */}
                <DatePicker
                  closeOnScroll={false}
                  open
                  selected={date}
                  minDate={new Date("October 24, 2023")}
                  maxDate={new Date("December 24, 2023")}
                  minTime={new Date().setHours(9, 0, 0)}
                  maxTime={new Date().setHours(17, 0, 0)}
                  showTimeSelect
                  dateFormat='Pp'
                  onChange={(e: any) => {
                    setDate(new Date(e));
                    console.log(e);
                  }}
                />
              </div>
            </div>

            <Button text='SAVE' onClick={handleSave} />
          </div>
        )}
      </div>
    </ModalStyle>
  );
};

export default Modal;
