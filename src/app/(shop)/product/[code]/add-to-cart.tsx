'use client';
import type { IProduct, SellerInfo } from '@/api/server-api/types';
import { useCartStore } from '@/store/cart-provider';
import { ShoppingCart } from '@mui/icons-material';
import { Button } from '@mui/material';

type Props = {
  product: IProduct;
  seller: SellerInfo;
};
export function AddToCart({ product, seller }: Props) {
  const { incrementItemCount } = useCartStore((state) => state);
  return (
    <Button
      fullWidth
      size="large"
      startIcon={<ShoppingCart />}
      variant="contained"
      onClick={() =>
        incrementItemCount({
          product,
          productSeller: seller,
        })
      }
    >
      اضافه کردن به سبد خرید
    </Button>
  );
}
