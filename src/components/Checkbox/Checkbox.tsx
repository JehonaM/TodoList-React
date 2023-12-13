import React from "react";

interface CheckboxProp {
  onClick: () => void;
  defaultChecked: boolean;
  className: string;
}

const Checkbox = ({ onClick, defaultChecked, className }: CheckboxProp) => {
  return (
    <input
      type="checkbox"
      onClick={onClick}
      defaultChecked={defaultChecked}
      className={className}
    />
  );
};

export default Checkbox;
