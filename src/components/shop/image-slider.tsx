"use client";
import React from "react";
import { Box, IconButton } from "@mui/material";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const images = [
  "https://picsum.photos/1920/400/?v1",
  "https://picsum.photos/1920/400/?v2",
  "https://picsum.photos/1920/400/?v3",
  "https://picsum.photos/1920/400/?v4",
];

const ImageSlider = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 10 },
    mode: "free-snap",
  });

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: 1920,
        mx: "auto",
        my: 4,
      }}
    >
      <Box ref={sliderRef} className="keen-slider">
        {images.map((src, index) => (
          <Box key={index} className="keen-slider__slide">
            <Box
              component="img"
              src={src}
              alt={`Slide ${index + 1}`}
              sx={{
                width: "100%",
                height: 400,
                objectFit: "cover",
                boxShadow: 3,
              }}
            />
          </Box>
        ))}
      </Box>

      {/* Navigation Buttons */}
      <IconButton
        sx={{
          position: "absolute",
          top: "50%",
          right: 10,
          transform: "translateY(-50%)",
          background: "#fff",
        }}
        onClick={() => instanceRef.current?.next()}
      >
        <ArrowBackIosNewIcon />
      </IconButton>
      <IconButton
        sx={{
          position: "absolute",
          top: "50%",
          left: 10,
          transform: "translateY(-50%)",
          background: "#fff",
        }}
        onClick={() => instanceRef.current?.prev()}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default ImageSlider;
