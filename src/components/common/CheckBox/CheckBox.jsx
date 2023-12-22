import React, { useState } from "react";

const CheckBox = ({ category, handleBrandToggle }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckBox = () => {
    setIsChecked(!isChecked);
    handleFilter(category, !isChecked);
  };

  return (
    <div className="flex items-center my-3 gap-5">
      <input
        className="checked:accent-gray-800 rounded-full w-5 h-4 cursor-pointer"
        type="checkbox"
        name={category}
        id={category}
        onChange={() => handleBrandToggle(category)}
      />{" "}
      <label
        className="text-gray-800 font-yekanSemiBold text-lg cursor-pointer"
        htmlFor={category}
      >
        {category}
      </label>
    </div>
  );
};

export default CheckBox;
