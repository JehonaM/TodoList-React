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
  error,
  className,
}: InputFieldProps) => {
  return (
    <>
      {label && <label htmlFor="input-field">{label}</label>}
      <input
        type={type}
        value={value}
        name={name}
        className={className}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        onBlur={onBlur}
      />
    </>
  );
};

export default InputFiled;
