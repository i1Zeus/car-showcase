"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";

interface ButtonProps {
  title: string;
  disabled: boolean;
  containerStyles?: string;
  handleCLick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  title,
  disabled,
  containerStyles,
  handleCLick,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      type={"button"}
      className={"custom-btn" + containerStyles}
      onClick={() => {}}
    >
      <span className={"flex-1"}>{title}</span>
    </button>
  );
};

export default Button;
