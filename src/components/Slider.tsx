import React, { useState } from 'react';
import hero1 from '../images/image-product-1.jpg';
import hero2 from '../images/image-product-2.jpg';
import hero3 from '../images/image-product-3.jpg';
import hero4 from '../images/image-product-4.jpg';
import prev from '../images/icon-previous.svg';
import next from '../images/icon-next.svg';

const heros = [hero1, hero2, hero3, hero4];

const Slider = () => {
  const [currentSlide, setSlide] = useState(0);

  const handlePrevSlide = () => {
    setSlide((index) => {
      if (index === 0) return heros.length - 1;
      else return index - 1;
    });
  };

  const handleNextSlide = () => {
    setSlide((index) => {
      if (index === heros.length - 1) return 0;
      else return index + 1;
    });
  };

  return (
    <div className="relative">
      <button
        onClick={handlePrevSlide}
        className="absolute top-1/2 -translate-y-1/2 left-4 bg-white rounded-full py-6 px-7 bg-opacity-70"
      >
        <img className="right-6 block" src={prev} />
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute top-1/2 -translate-y-1/2 right-4 bg-white rounded-full py-6 px-7 bg-opacity-70"
      >
        <img className="left-6 inline-block" src={next} />
      </button>

      <img src={heros[currentSlide]} />
    </div>
  );
};

export default Slider;
