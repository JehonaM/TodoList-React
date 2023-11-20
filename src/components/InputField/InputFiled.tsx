import React, { ChangeEvent } from "react";

type InputFieldProps = {
  value: any;
  name: string;
  label: string;
  type: string;
  placeholder: string;
  error?: string;
  className: string;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const InputFiled = ({
  value,
  label,
  name,
  placeholder,
  type,
  onChange,
}: InputFieldProps) => {
  return (
    <div className="form-group">
      {label && <label htmlFor="input-field">{label}</label>}
      <input
        type={type}
        value={value}
        name={name}
        className="w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slage-600 sm:text-sm sm:leading-6"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default InputFiled;
