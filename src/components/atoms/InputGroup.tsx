import React, { ChangeEventHandler } from 'react';

type InputGroupProps = {
  onChange: ChangeEventHandler,
  value: string | number,
  label: string,
  type: string,
}

export default function InputGroup({
  onChange, value, label, type,
}: InputGroupProps) {
  return (
    <div className="InputGroup">
      <label className="InputGroup__label" htmlFor="input">
        {label}
      </label>
      <input
        type={type}
        onChange={onChange}
        value={value}
        className="InputGroup__input"
      />

    </div>
  );
}
