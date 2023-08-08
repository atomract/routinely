import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AirPodsAnimation = () => {
  const canvasRef = useRef(null);
  const airpods = {
    frame: 0
  };
  const frameCount = 120;
  const currentFrame = (index) =>
    `https://gcpsucks.s3.ap-south-1.amazonaws.com/sprite/tile${(
      index
    )
      .toString()
      .padStart(3, '0')}.png`;
console.log(currentFrame)
  const images = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    canvas.width = 1158;
    canvas.height = 770;
    let lastIndex=120
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      const reverseIndex = lastIndex - i;
      img.src = currentFrame(reverseIndex);
      console.log(img,i)
      images.push(img);

    }

    const vh = (coef) => window.innerHeight * (coef/100);
    const vw = (coef) => window.innerWidth * (coef/100);

    gsap.to(airpods, {
      frame: frameCount - 1,
      snap: 'frame',
      ease: 'none',
      scrollTrigger: {
        scrub: 0.5,
        end: () => Math.min(vw(100), vh(180)) + ' bottom', // vmin

      },
      onUpdate: render // use animation onUpdate instead of scrollTrigger's onUpdate
    });

    images[0].onload = render;

    function render() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images[airpods.frame], 0, 0);
    }
  }, []);

  return <canvas ref={canvasRef} id="hero-lightpass" />;
};

export default AirPodsAnimation;
