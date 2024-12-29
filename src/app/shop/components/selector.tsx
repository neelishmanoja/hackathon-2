// components/Selector.js
"use client";
import { useState } from "react";

const Selector = ({ options, onChange } :any) => {
  const [selected, setSelected] = useState("");

  const handleChange = (event :any) => {
    setSelected(event.target.value);
    if (onChange) onChange(event.target.value);
  };

  return (
    <div className="relative w-64">
      <select
        value={selected}
        onChange={handleChange}
        className="w-full p-2.5 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="" disabled>
          Newest
        </option>
        {options.map((option :any, index :any) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
