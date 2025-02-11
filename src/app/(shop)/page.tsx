// import { getCategories } from "@/api/server-api/shop/categories";
import { getProducts } from "@/api/server-api/shop/products";
import ImageSlider from "@/components/shop/image-slider";
import ProductCard from "@/components/shop/product-card";
import { Box, Container } from "@mui/material";

export default async function Home() {
  const products = await getProducts();
  // const categories = await getCategories();
  return (
    <Box>
      <Box my={2}>
        <ImageSlider />
      </Box>
      <Box component="section">
        <Container>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              my: 2,
            }}
          >
            {products.results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Box>
        </Container>
      </Box>
      <Box component="section">
        <Container>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              my: 2,
            }}
          >
            {products.results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Box>
        </Container>
      </Box>
      <Box component="section">
        <Container>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              my: 2,
            }}
          >
            {products.results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
