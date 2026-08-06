import React, { useEffect, useRef } from 'react';
import { SliderContainer, ScrollWrapper, Image, ScrollTrack } from './ImageSlider.styles';
import { SliderData } from './SliderData';

const ImageSlider = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
        const nextScrollLeft = scrollLeft + clientWidth;

        scrollRef.current.scrollTo({
          left: nextScrollLeft >= scrollWidth ? 0 : nextScrollLeft,
          behavior: 'smooth',
        });
      }
    }, 3000);   

    return () => clearInterval(interval);
  }, []);

  return (
    <SliderContainer>
        <ScrollTrack>
            <ScrollWrapper ref={scrollRef}>
            {SliderData.map((slide, index) => (
            <Image key={index} src={slide.image} alt={`slide-${index}`}/>
            ))}
            </ScrollWrapper>
        </ScrollTrack>
    </SliderContainer>
  );
};

export default ImageSlider;
