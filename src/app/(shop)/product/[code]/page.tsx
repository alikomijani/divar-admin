import { getProductById } from '@/api/server-api/products';
import type { ServerPageProps } from '@/api/server-api/types';
import { ShoppingCart, Favorite, Share } from '@mui/icons-material';
import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  Grid2,
  IconButton,
  Paper,
  Rating,
  Stack,
  Typography,
} from '@mui/material';
import ProductImage from './product-image';

export default async function Page({ params }: ServerPageProps) {
  const { code } = await params;
  const product = await getProductById(code);
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid2 container spacing={4}>
        {/* Left Column - Images */}
        <ProductImage product={product} />

        {/* Right Column - Product Details */}
        <Grid item md={6} xs={12}>
          <Stack spacing={3}>
            <Box>
              <Typography gutterBottom variant="h4">
                {product.titleEn}
              </Typography>
              <Typography gutterBottom color="text.secondary" variant="h5">
                {product.titleFa}
              </Typography>
              <Stack alignItems="center" direction="row" spacing={1}>
                <Typography variant="subtitle1">Brand:</Typography>
                <Chip
                  label={product.brand.titleEn}
                  avatar={
                    <Box
                      alt={product.brand.titleEn}
                      component="img"
                      src={product.brand.logo}
                      sx={{ width: 20, height: 20 }}
                    />
                  }
                />
              </Stack>
            </Box>

            <Stack alignItems="center" direction="row" spacing={2}>
              <Rating readOnly value={4} />
              <Typography color="text.secondary" variant="body2">
                (125 Reviews)
              </Typography>
            </Stack>

            <Paper sx={{ p: 2 }} variant="outlined">
              <Stack spacing={2}>
                <Typography variant="h6">Price Details</Typography>
                <Stack
                  alignItems="center"
                  direction="row"
                  justifyContent="space-between"
                >
                  <Typography variant="body1">Original Price:</Typography>
                  <Typography
                    sx={{ textDecoration: 'line-through' }}
                    variant="h6"
                  >
                    ${product.bestSeller?.lastPrice}
                  </Typography>
                </Stack>
                <Stack
                  alignItems="center"
                  direction="row"
                  justifyContent="space-between"
                >
                  <Typography variant="body1">Discount:</Typography>
                  <Chip
                    color="error"
                    label={`${product.bestSeller?.discount}% OFF`}
                  />
                </Stack>
                {product.bestSeller && (
                  <Stack
                    alignItems="center"
                    direction="row"
                    justifyContent="space-between"
                  >
                    <Typography variant="body1">Final Price:</Typography>
                    <Typography color="primary" variant="h5">
                      $
                      {product.bestSeller.lastPrice *
                        (1 - product.bestSeller.discount / 100)}
                    </Typography>
                  </Stack>
                )}
              </Stack>
            </Paper>

            <Stack direction="row" spacing={2}>
              {product.colors.map((color, index) => (
                <Chip
                  key={index}
                  label={color.title}
                  sx={{
                    backgroundColor: color.hexCode,
                    '&:hover': { opacity: 0.9 },
                  }}
                />
              ))}
            </Stack>

            <Stack direction="row" spacing={2}>
              <Button
                fullWidth
                size="large"
                startIcon={<ShoppingCart />}
                variant="contained"
              >
                Add to Cart
              </Button>
              <IconButton color="primary">
                <Favorite />
              </IconButton>
              <IconButton color="primary">
                <Share />
              </IconButton>
            </Stack>

            <Divider />

            <Box>
              <Typography gutterBottom variant="h6">
                Expert Review
              </Typography>
              <Typography variant="body1">{product.expert_review}</Typography>
            </Box>

            <Box>
              <Typography gutterBottom variant="h6">
                Seller Information
              </Typography>
              <Typography variant="body1">
                {product.bestSeller?.seller.name}
              </Typography>
              <Typography color="text.secondary" variant="body2">
                Items in stock: {product.bestSeller?.count}
              </Typography>
            </Box>
          </Stack>
        </Grid>
      </Grid2>
    </Container>
  );
}
