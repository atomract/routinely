import React, { useState } from 'react';
import { useTransition, animated, easings } from '@react-spring/web';
import BottlwImg from '../assets/ImgBottl.png'

const ImageList = ({srcPath, idx, ky}) => {


    const transitions = useTransition(idx, {
        
      from: {scale: 0.5 },
      enter:  {scale: 1.5},
      leave: {scale: 0.5 },
      config: {duration: 600, tension: 600 },

    });
  
    return (
      <div>
        <div >
          {transitions((style, i) => (
            <div className='xl:mt-12' key={i} >
              <animated.img
                src={srcPath}
                className={'sm:h-28 sm:w-12 xl:h-52 z-5 xl:w-44 rounded-3xl'}
                style={{ ...style }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ImageList;