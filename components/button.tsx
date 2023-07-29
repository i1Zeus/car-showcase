"use client";

import { cn } from "@/lib/utils";
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
      className={cn(
        "custom-btn",
        disabled ? "opacity-50" : "",
        containerStyles
      )}
      onClick={() => {}}
    >
      <span className={"flex-1"}>{title}</span>
    </button>
  );
};

export default Button;
