import React from "react";
import { ButtonStyle } from "./style";

type IButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
};

const Button = ({ text, onClick, className }: IButtonProps) => {
  return (
    <ButtonStyle onClick={onClick} className={className}>
      {text}
    </ButtonStyle>
  );
};

export default Button;
