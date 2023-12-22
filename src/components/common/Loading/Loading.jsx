import React from "react";
import loading from "../../../assets/img/orange_circles.gif";

const Loading = () => {
  return (
    <div className="flex items-center justify-center mt-8">
      <img className="w-[60px]" src={loading} alt="" />
    </div>
  );
};

export default Loading;
