'use client';

import ProductCard from '@/components/shop/product-card';
import { useCartStore } from '@/store/cart-provider';
import { Card, CardContent } from '@mui/material';

export const Cart = () => {
  const { items } = useCartStore((state) => state);

  return (
    <Card>
      <CardContent>
        {items.map((item) => (
          <ProductCard
            key={item.productSeller.id}
            product={{ ...item.product, bestSeller: item.productSeller }}
          />
        ))}
      </CardContent>
    </Card>
  );
};
