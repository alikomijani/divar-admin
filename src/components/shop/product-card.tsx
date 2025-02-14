import type { IProduct } from '@/api/server-api/types';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import React from 'react';

type Props = {
  product: IProduct;
};

export default function ProductCard({ product }: Props) {
  return (
    <Card
      component={Link}
      href={'/product/' + product.code}
      variant="outlined"
      sx={{
        width: 254,
        textDecoration: 'none',
        color: 'unset',
        display: 'block',
      }}
    >
      <CardMedia
        image={product.images.main}
        sx={{ height: 140 }}
        title={product.titleFa}
      />
      <CardContent>
        <Typography gutterBottom component="h3" variant="h5">
          {product.code}
        </Typography>
        {product.bestSeller && (
          <Box alignItems="start" display="flex" justifyContent="space-between">
            <Box
              sx={{
                bgcolor: 'error.main',
                color: 'error.contrastText',
                padding: 0.5,
                paddingX: 1,
                borderRadius: 2,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                visibility:
                  product.bestSeller.discount > 0 ? 'visible' : 'hidden',
              }}
            >
              <Typography
                variant="overline"
                sx={{
                  fontWeight: 500,
                  lineHeight: 1,
                }}
              >
                {product.bestSeller.discount}%
              </Typography>
            </Box>
            <Box>
              <Typography gutterBottom>
                {product.bestSeller.lastPrice.toLocaleString('fa')} تومان
              </Typography>
              <Typography
                gutterBottom
                sx={{
                  visibility:
                    product.bestSeller.discount > 0 ? 'visible' : 'hidden',
                }}
              >
                {product.bestSeller.lastPrice}
              </Typography>
            </Box>
          </Box>
        )}
      </CardContent>
      <CardActions>
        <Button size="small">افزودن به سبد خرید</Button>
      </CardActions>
    </Card>
  );
}
