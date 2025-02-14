'use client';
import type { IProduct } from '@/api/server-api/types';
import { Grid2, Card, CardMedia, Stack, Box } from '@mui/material';
import React, { useState } from 'react';

type Props = {
  product: IProduct;
};

export default function ProductImage({ product }: Props) {
  const [selectedImage, setSelectedImage] = useState(product.images.main);

  return (
    <Grid2 size={{ xs: 12, md: 6 }}>
      <Card sx={{ mb: 2 }}>
        <CardMedia
          alt={product.titleEn}
          component="img"
          height="400"
          image={selectedImage}
          sx={{ objectFit: 'contain' }}
        />
      </Card>
      <Stack direction="row" spacing={1} sx={{ overflowX: 'auto', pb: 1 }}>
        <Box
          component="img"
          src={product.images.main}
          sx={{
            width: 80,
            height: 80,
            cursor: 'pointer',
            border:
              selectedImage === product.images.main
                ? '2px solid #1976d2'
                : 'none',
            borderRadius: 1,
          }}
          onClick={() => setSelectedImage(product.images.main)}
        />
        {product.images.list.map((img, index) => (
          <Box
            key={index}
            component="img"
            src={img}
            sx={{
              width: 80,
              height: 80,
              cursor: 'pointer',
              border: selectedImage === img ? '2px solid #1976d2' : 'none',
              borderRadius: 1,
            }}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </Stack>
    </Grid2>
  );
}
