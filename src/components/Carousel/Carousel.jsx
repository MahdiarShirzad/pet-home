import React, { useState, useEffect } from "react";
import slider1 from "../../assets/img/slider-1.jpg";
import slider2 from "../../assets/img/slider-2.jpg";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [slider1, slider2, slider1, slider2, slider1, slider2];
  const intervalDuration = 4000; // 4 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % slides.length;
      setCurrentSlide(nextSlide);
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [currentSlide, slides.length, intervalDuration]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className=" relative max-w-[1156px] h-[470px] mx-auto ">
      <div className="overflow-hidden relative h-[470px] mx-4 ">
        {/* Display the current slide */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`w-full absolute transition-transform duration-1000  ${
              index === currentSlide
                ? "opacity-100"
                : "opacity-0 -translate-x-full"
            }`}
          >
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full  h-[470px] object-cover rounded-bl-[50px] rounded-br-[50px]"
            />
          </div>
        ))}
      </div>

      {/* Circles to indicate current slide */}
      <div className=" absolute left-0 right-0 bottom-[-30px] flex mb-1 justify-center">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 mx-1 rounded-full cursor-pointer transition-opacity duration-500 ${
              index === currentSlide
                ? "bg-[#febf0f] w-[25px] transition-opacity duration-500"
                : "bg-gray-300 transition-opacity duration-500"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
