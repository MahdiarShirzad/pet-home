import React, { useState, useEffect } from "react";

import avatar1 from "../../assets/img/profile.jpg";
import avatar2 from "../../assets/img/profile-1.jpg";
import avatar3 from "../../assets/img/profile-2.jpg";
import avatar4 from "../../assets/img/profile-3.jpg";

const CommentsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      avatar: avatar1,
      name: "سامان نظری",
      comment:
        " این یک نوشته آزمایشی است که به طراحان و برنامه نویسان کمک میکند تا این عزیزان با بهره گیری از این نوشته تستی و آزمایشی بتوانند نمونه تکمیل شده از پروژه و طرح خودشان را به کارفرما نمایش دهند.",
      star: 2,
    },
    {
      avatar: avatar2,
      name: "سامان نظری",
      comment:
        " این یک نوشته آزمایشی است که به طراحان و برنامه نویسان کمک میکند تا این عزیزان با بهره گیری از این نوشته تستی و آزمایشی بتوانند نمونه تکمیل شده از پروژه و طرح خودشان را به کارفرما نمایش دهند.",
      star: 1,
    },
    {
      avatar: avatar3,
      name: "سامان نظری",
      comment:
        " این یک نوشته آزمایشی است که به طراحان و برنامه نویسان کمک میکند تا این عزیزان با بهره گیری از این نوشته تستی و آزمایشی بتوانند نمونه تکمیل شده از پروژه و طرح خودشان را به کارفرما نمایش دهند.",
      star: 5,
    },
    {
      avatar: avatar4,
      name: "سامان نظری",
      comment:
        " این یک نوشته آزمایشی است که به طراحان و برنامه نویسان کمک میکند تا این عزیزان با بهره گیری از این نوشته تستی و آزمایشی بتوانند نمونه تکمیل شده از پروژه و طرح خودشان را به کارفرما نمایش دهند.",
      star: 3,
    },
  ];
  const intervalDuration = 7000; // 4 seconds

  const renderStars = (star) => {
    const stars = [];
    const totalStars = 5;

    for (let i = 1; i <= totalStars; i++) {
      if (i <= star) {
        stars.push(
          <svg
            width="15"
            height="14"
            viewBox="0 0 15 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.24563 10.8425L3.38813 12.8706L4.125 8.575L1 5.53313L5.3125 4.90813L7.24125 1L9.17 4.90813L13.4825 5.53313L10.3575 8.575L11.0944 12.8706L7.24563 10.8425Z"
              fill="#FDC736"
              stroke="#FDC736"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        );
      } else {
        stars.push(
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.64892 13.7438C3.60065 14.0252 3.71632 14.3096 3.94729 14.4774C4.17825 14.6452 4.48446 14.6673 4.73715 14.5345L8.24523 12.6901L11.7447 14.5341C11.9974 14.6673 12.3038 14.6454 12.5349 14.4776C12.7661 14.3098 12.8819 14.0253 12.8336 13.7438L12.1634 9.83716L15.0056 7.07055C15.2103 6.87133 15.284 6.57314 15.1958 6.30148C15.1076 6.02982 14.8727 5.83185 14.5901 5.79088L10.668 5.22246L8.9138 1.66808C8.78746 1.41208 8.52673 1.25 8.24125 1.25C7.95577 1.25 7.69504 1.41208 7.5687 1.66808L5.81453 5.22246L1.89243 5.79088C1.60975 5.83185 1.37489 6.02982 1.28667 6.30148C1.19845 6.57314 1.27219 6.87133 1.47687 7.07055L4.31907 9.83716L3.64892 13.7438Z"
              stroke="#FDC736"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        );
      }
    }

    return stars;
  };

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
    <div className=" relative max-w-[1000px] h-[300px] mx-auto mt-14 bg-white rounded-[50px]">
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
            <div className="flex items-center h-[300px] justify-between px-20 font-yekanReg">
              <div className="w-[20%] flex items-center justify-center">
                <img
                  className="w-[120px] rounded-full border-2 p-1"
                  src={slide.avatar}
                  alt={`Slide ${index + 1}`}
                />
              </div>

              <div className="w-[77%] text-[#333]">
                <p className="leading-8 my-6">{slide.comment}</p>
                <p>{slide.name}</p>
                <div className="flex items-start mt-2 gap-1">
                  {renderStars(slide.star)}
                </div>
              </div>
            </div>
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

export default CommentsCarousel;
