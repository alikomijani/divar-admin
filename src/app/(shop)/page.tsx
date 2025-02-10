import { getCategories } from "@/api/server-api/shop/categories";
import { getProducts } from "@/api/server-api/shop/products";
import ImageSlider from "@/components/shop/image-slider";
import ProductCard from "@/components/shop/product-card";
import { Box } from "@mui/material";

export default async function Home() {
  const products = await getProducts();
  const categories = await getCategories();
  console.log(categories);
  return (
    <Box>
      <Box>
        <ImageSlider />
      </Box>
      <Box component="section">
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          {products.results.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
