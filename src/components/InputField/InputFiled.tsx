import React, { ChangeEvent, useState } from "react";

type InputFieldProps = {
  value: any;
  name: string;
  label: string;
  type: string;
  placeholder: string;
  error?: string;
  className: string;
  required: boolean;
  disabled?: boolean;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const InputFiled = ({
  value,
  label,
  name,
  placeholder,
  type,
  required,
  onChange,
  onBlur,
  error
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
        required={required}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

export default InputFiled;
