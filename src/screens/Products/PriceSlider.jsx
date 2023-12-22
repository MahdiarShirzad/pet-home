import RangeSlider from "react-range-slider-input";

import "react-range-slider-input/dist/style.css";

const PriceSlider = ({ values, setValues, highestPrice }) => {
  const handleMin = (event) => {
    const newArray = [...values];
    newArray[0] = Number(event.target.value);
    setValues(newArray);
  };
  const handleMax = (event) => {
    const newArray = [...values];
    newArray[1] = Number(event.target.value);
    setValues(newArray);
  };

  return (
    <div className="w-full rounded-xl bg-white mt-5 pb-5 font-yekanReg text-sm">
      <div className="my-5 py-8 px-5">
        <RangeSlider
          id="range-slider-yellow"
          className="bg-[#FFAA00]  "
          value={values}
          min={0}
          max={highestPrice}
          onInput={(newValue) => setValues(newValue)}
          step={50000}
        />
      </div>
      <div className="flex items-center justify-center gap-x-2">
        {/* MIN */}
        <div className="flex flex-col items-start justify-center gap-y-1">
          <h1 className="text-base mb-2">حداقل</h1>
          <div className="flex justify-between items-center gap-x-3 outline-none bg-[#FEBF0F26] text-primary   rounded-full py-2 px-3  ">
            <h4 className="text-sm text-gray-500">تومان</h4>
            <input
              value={values?.[0]}
              readOnly=""
              style={{
                WebkitAppearance: "none",
                MozAppearance: "textfield",
              }}
              onChange={handleMin}
              type="number"
              className="w-16 text-center rounded-2xl bg-[#FEBF0F26]"
            />
          </div>
        </div>

        {/* MAX */}
        <div className="flex flex-col items-start justify-center gap-y-1">
          <h1 className="text-base  mb-2">حداکثر</h1>
          <div className="flex justify-between items-center gap-x-3 outline-none bg-[#FEBF0F26] text-primary   rounded-full py-2 px-3  ">
            <h4 className="text-sm text-gray-500">تومان</h4>
            <input
              readOnly=""
              style={{
                WebkitAppearance: "none",
                MozAppearance: "textfield",
              }}
              value={values?.[1]}
              onChange={handleMax}
              type="number"
              className="w-16 text-center  rounded-2xl bg-[#FEBF0F26]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceSlider;
