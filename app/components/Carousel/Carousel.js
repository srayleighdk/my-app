"use client";
import { useState } from "react";
import Image from "next/image";

import slide1 from "../../../public/images/slide1.webp";
import slide2 from "../../../public/images/slide2.webp";
import slide3 from "../../../public/images/slide3.webp";

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideTo = (index) => {
    setActiveIndex(index);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 4 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === 4 ? 0 : prevIndex + 1));
  };

  return (
    <div
      id="default-carousel"
      className="w-full relative"
      data-carousel="slide"
    >
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden md:h-96">
        {/* Item 1 */}
        <div
          className={`duration-700 ease-in-out ${
            activeIndex === 0 ? "block" : "hidden"
          }`}
          data-carousel-item
        >
          <Image
            src={slide1}
            className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        {/* Item 2 */}
        <div
          className={`duration-700 ease-in-out ${
            activeIndex === 1 ? "block" : "hidden"
          }`}
          data-carousel-item
        >
          <Image
            src={slide2}
            className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        {/* Item 3 */}
        <div
          className={`duration-700 ease-in-out ${
            activeIndex === 2 ? "block" : "hidden"
          }`}
          data-carousel-item
        >
          <Image
            src={slide3}
            className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
      </div>
      {/* Slider indicators */}
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button
          type="button"
          className={`w-3 h-3 rounded-full ${
            activeIndex === 0 ? "bg-gray-900" : "bg-gray-400"
          }`}
          aria-current={activeIndex === 0}
          aria-label="Slide 1"
          data-carousel-slide-to="0"
          onClick={() => handleSlideTo(0)}
        ></button>
        <button
          type="button"
          className={`w-3 h-3 rounded-full ${
            activeIndex === 1 ? "bg-gray-900" : "bg-gray-400"
          }`}
          aria-current={activeIndex === 1}
          aria-label="Slide 2"
          data-carousel-slide-to="1"
          onClick={() => handleSlideTo(1)}
        ></button>
        <button
          type="button"
          className={`w-3 h-3 rounded-full ${
            activeIndex === 2 ? "bg-gray-900" : "bg-gray-400"
          }`}
          aria-current={activeIndex === 2}
          aria-label="Slide 3"
          data-carousel-slide-to="2"
          onClick={() => handleSlideTo(2)}
        ></button>
      </div>
    </div>
  );
}
