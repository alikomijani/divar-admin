'use client';
import React from 'react';
import { Box, IconButton } from '@mui/material';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const images = [
  'https://picsum.photos/1920/400/?v1',
  'https://picsum.photos/1920/400/?v2',
  'https://picsum.photos/1920/400/?v3',
  'https://picsum.photos/1920/400/?v4',
];

const ImageSlider = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 10 },
    mode: 'free-snap',
  });

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: 'xl',
        mx: 'auto',
        '& .controller': {
          visibility: 'hidden',
          position: 'absolute',
          top: '85%',
          color: 'background.paper',
        },
        '&:hover': {
          '& .controller': {
            visibility: 'visible',
          },
        },
      }}
    >
      <Box ref={sliderRef} className="keen-slider">
        {images.map((src, index) => (
          <Box key={index} className="keen-slider__slide">
            <Box
              alt={`Slide ${index + 1}`}
              component="img"
              src={src}
              sx={{
                width: '100%',
                height: 400,
                objectFit: 'cover',
                boxShadow: 3,
              }}
            />
          </Box>
        ))}
      </Box>

      {/* Navigation Buttons */}
      <IconButton
        className="controller"
        sx={{
          left: 60,
        }}
        onClick={() => instanceRef.current?.next()}
      >
        <ArrowBackIosNewIcon />
      </IconButton>
      <IconButton
        className="controller"
        sx={{
          left: 10,
        }}
        onClick={() => instanceRef.current?.prev()}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default ImageSlider;
