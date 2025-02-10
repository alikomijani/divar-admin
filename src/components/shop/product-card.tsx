import { IProduct } from "@/api/server-api/types";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

type Props = {
  product: IProduct;
};

export default function ProductCard({ product }: Props) {
  return (
    <Card sx={{ width: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={product.images.main}
        title={product.titleFa}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h3">
          {product.code}
        </Typography>
        {product.bestSeller && (
          <Box display="flex" justifyContent="space-between" alignItems="start">
            <Box
              sx={{
                bgcolor: "error.dark",
                color: "error.contrastText",
                padding: 0.5,
                paddingX: 1,
                borderRadius: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                visibility:
                  product.bestSeller.discount > 0 ? "visible" : "hidden",
              }}
            >
              <Typography
                variant="body2"
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
                {product.bestSeller.lastPrice.toLocaleString("fa")} تومان
              </Typography>
              <Typography
                gutterBottom
                sx={{
                  visibility:
                    product.bestSeller.discount > 0 ? "visible" : "hidden",
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
