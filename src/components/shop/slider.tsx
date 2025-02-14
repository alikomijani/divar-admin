'use client';
import React from 'react';
import { Box, IconButton } from '@mui/material';
import { useKeenSlider } from 'keen-slider/react';
import type { ReactNode } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import 'keen-slider/keen-slider.min.css';

type Props = {
  children?: ReactNode[];
};

export default function Slider({ children }: Props) {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: false,
    mode: 'free',
    rtl: true,
    slides: { perView: 'auto', spacing: 10 },
  });
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: 'xl',
        mx: 'auto',
      }}
    >
      <Box ref={sliderRef} className="keen-slider">
        {children?.flat().map((child, index) => (
          <Box
            key={index}
            className="keen-slider__slide"
            style={{ maxWidth: 254, minWidth: 254 }}
          >
            {child}
          </Box>
        ))}
      </Box>
      {/* Navigation Buttons */}
      <IconButton
        sx={{
          position: 'absolute',
          top: '50%',
          right: 10,
          transform: 'translateY(-50%)',
          background: '#fff',
        }}
        onClick={() => instanceRef.current?.next()}
      >
        <ArrowBackIosNewIcon />
      </IconButton>
      <IconButton
        sx={{
          position: 'absolute',
          top: '50%',
          left: 10,
          transform: 'translateY(-50%)',
          background: '#fff',
        }}
        onClick={() => instanceRef.current?.prev()}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
}
