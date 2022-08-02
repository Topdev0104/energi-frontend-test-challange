import React from "react";
import { ButtonWrapper } from "./button.styles";

interface ButtonProps {
  onClick: any;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>;
};

export default Button;
