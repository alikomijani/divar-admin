import ImageSlider from '@/components/shop/image-slider';
import IncredibleProducts from '@/components/shop/incredible-products';
import { Box, Container } from '@mui/material';
import { Suspense } from 'react';

// server component
// static
export default async function Home() {
  return (
    <Box>
      <Box>
        <ImageSlider />
      </Box>
      <Container maxWidth="xl">
        <Box display="flex">
          <Box />
        </Box>
        <Suspense fallback="loading">
          {/* dynamic */}
          <IncredibleProducts />
        </Suspense>
      </Container>
    </Box>
  );
}
