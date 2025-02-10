import { getProducts } from "@/api/server-api/shop/products";
import ImageSlider from "@/components/shop/image-slider";

export default async function Home() {
  const products = await getProducts();
  return (
    <div>
      <ImageSlider />
    </div>
  );
}
