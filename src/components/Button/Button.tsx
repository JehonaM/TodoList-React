import React from "react";

export type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  color?: "primary" | "secondary";
  disabled?: boolean;
  className: string;
};

const Button = ({
  onClick,
  children,
  color = "primary",
  disabled,
  className,
}: ButtonProps) => {
  return (
    <button onClick={onClick} className="className">
      {children}
    </button>
  );
};

export default Button;
