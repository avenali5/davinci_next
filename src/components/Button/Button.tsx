import React from "react";
import { ButtonStyle } from "./style";

type IButtonProps = {
  text: string;
  onClick?: () => void;
};

const Button = ({ text, onClick }: IButtonProps) => {
  return <ButtonStyle onClick={onClick}>{text}</ButtonStyle>;
};

export default Button;
