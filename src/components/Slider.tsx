import React, { useState } from 'react';
import hero1 from '../images/image-product-1.jpg';
import hero2 from '../images/image-product-2.jpg';
import hero3 from '../images/image-product-3.jpg';
import hero4 from '../images/image-product-4.jpg';
import thumb1 from '../images/image-product-1-thumbnail.jpg';
import thumb2 from '../images/image-product-2-thumbnail.jpg';
import thumb3 from '../images/image-product-3-thumbnail.jpg';
import thumb4 from '../images/image-product-4-thumbnail.jpg';
import prev from '../images/icon-previous.svg';
import next from '../images/icon-next.svg';

// Dektop gallery
// اول باید تامب ها رو نشون بدیم
// بعد اونی که کلیک میشه رو خاکستری کنیم
// بعد همونی که کلیک شده رو نمایش بدیم

const heros = [hero1, hero2, hero3, hero4];

const thumbs = [thumb1, thumb2, thumb3, thumb4];

const Slider = () => {
  const [currentSlide, setSlide] = useState(0);
  const [clickedThumb, setClickedThumb] = useState(0);

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

  const handleThumb = (index: number) => {
    setClickedThumb(index);
  };

  return (
    <>
      <div className="relative lg:hidden">
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

      {/* //Desktop */}
      <div className="hidden flex lg:block ml-4 mt-6 ">
        <img className="rounded-2xl mb-6" src={heros[clickedThumb]} alt="" />
        <button className="flex flex-row justify-between ">
          {thumbs.map((thumb, index) => (
            <div
              className={`mt-10 w-2/12 rounded-md ${
                index === clickedThumb ? 'border-4 border-orange-500' : ''
              }`}
            >
              <img
                onClick={() => handleThumb(index)}
                className={`rounded-lg ${
                  index === clickedThumb ? 'opacity-50 rounded-sm' : ''
                }`}
                key={index}
                src={thumb}
                alt=""
              />
            </div>
          ))}
        </button>
      </div>
    </>
  );
};

export default Slider;
