import react from "react";

export default function InputGroup({onChange, value, label, type}) {
  return (
    <div className="InputGroup">
      <label className="InputGroup__label">
        {label}
      </label>
      <input
        type="text"
        onChange={onChange}
        value={value}
        className="InputGroup__input"
      />

    </div>
  )
}