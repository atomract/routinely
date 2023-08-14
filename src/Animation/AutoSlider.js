import React, { useState } from 'react';
import { useSprings, animated } from '@react-spring/web';
import BottlwImg from '../assets/ImgBottl.png'
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

const images = [ BottlwImg, BottlwImg, BottlwImg, BottlwImg, BottlwImg, BottlwImg,  BottlwImg, BottlwImg ];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Create animated springs for each image
  const springs = useSprings(images.length, images.map((_, i) => ({
    opacity: index === i ? 1 : 0,
    transform: `translateX(${100 * (i - index)}%)`,
  })));

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div className="flex transition-all" style={{ width: `${images.length * 100}%`, transform: `translateX(-${index * 100 / images.length}%)` }}>
        {springs.map((style, i) => (
          <animated.div
            key={i}
            className="w-screen h-screen"
            style={{ ...style, backgroundImage: `url(${images[i]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          ></animated.div>
        ))}
      </div>
      <button
        className="absolute bottom-4 right-4 px-4 py-2 bg-blue-500 text-white rounded focus:outline-none"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default ImageSlider;
