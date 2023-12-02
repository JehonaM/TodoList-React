import React from "react";

const Checkbox = ({ onClick, defaultChecked, cName }: any) => {
  return (
    <input
      type="checkbox"
      onClick={onClick}
      defaultChecked={defaultChecked}
      className="cName"
    />
  );
};

export default Checkbox;
