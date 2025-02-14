import { getProducts } from '@/api/server-api/products';
import { Box, Button } from '@mui/material';
import React from 'react';
import ProductCard from './product-card';
import Image from 'next/image';
import { ChevronLeft } from '@mui/icons-material';
import Slider from './slider';

export default async function IncredibleProducts() {
  const products = await getProducts();

  return (
    <Box
      component="section"
      sx={{
        bgcolor: 'error.main',
        borderRadius: 4,
        overflow: 'hidden',
        padding: 2,
      }}
    >
      <Slider>
        <IncredibleProductsTitle />
        {products.results.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Slider>
    </Box>
  );
}

const IncredibleProductsTitle = () => (
  <Box
    sx={{
      flexShrink: 0,
      width: 200,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <Image alt="Amazing" height={88} src="/images/Amazings.svg" width={88} />
    <Image alt="Amazing" height={80} src="/images/Amazing.svg" width={90} />
    <Box
      sx={{
        display: 'flex',
        m: 2,
        gap: 2,
        '&>*': {
          bgcolor: 'background.paper',
          p: 1,
          borderRadius: 1,
          typography: 'h6',
        },
      }}
    >
      <Box>22</Box>
      <Box>12</Box>
      <Box>12</Box>
    </Box>
    <Button
      color="error"
      endIcon={<ChevronLeft />}
      variant="text"
      sx={{
        color: 'error.contrastText',
      }}
    >
      مشاهده همه
    </Button>
  </Box>
);
