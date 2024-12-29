// pages/index.js
"use client";
import Selector from "@/app/shop/components/selector";

export default function Option() {
  const options = [
    { value: "Option 1", label: "trendy foods" },
    { value: "Option 2", label: "Our best foods" },
    { value: "Option 3", label: "Traditional" },
  ];

  const handleSelectionChange = (value :any) => {
    console.log("Selected value:", value);
  };

  return (
    <div className="flex items-center w-40 ">
      <Selector options={options} onChange={handleSelectionChange} />
    </div>
  );
}
