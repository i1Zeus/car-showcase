"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { MouseEventHandler } from "react";

interface ButtonProps {
  title: string;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  title,
  disabled,
  className,
  type,
  handleClick,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      type={type || "button"}
      className={cn("custom-btn", disabled ? "opacity-50" : "", className)}
      onClick={() => handleClick}
    >
      <span className={"flex-1"}>{title}</span>
    </button>
  );
};

export default Button;
