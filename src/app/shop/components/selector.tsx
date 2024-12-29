
"use client";
import { useState } from "react";


interface Option {
  value: string;
  label: string;
}

// Define the types for the props
interface SelectorProps {
  options: Option[];
  onChange?: (value: string) => void;  // Optional callback for the selected value
}

const Selector = ({ options, onChange }: SelectorProps) => {
  const [selected, setSelected] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelected(value);
    if (onChange) onChange(value);
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
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;

