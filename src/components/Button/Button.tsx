import React from "react";

export type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  color?: "primary" | "secondary";
  disabled?: boolean;
  label: string;
};

const Button = ({
  onClick,
  children,
  color = "primary",
  disabled,
  label,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
    >
      {label}
    </button>
  );
};

export default Button;
