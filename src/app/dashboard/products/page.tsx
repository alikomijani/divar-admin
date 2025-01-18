import { getCategories } from "@/app/server-api/categories";
import { ServerPageProps } from "@/app/server-api/types";
import { TableContainer } from "@/components/tables/TableContainer";
import { ProductTable } from "./product-table";
import { getProducts } from "@/app/server-api/products";

export default async function CategoryPage({ searchParams }: ServerPageProps) {
  const params = await searchParams;
  const products = await getProducts(params);
  return (
    <TableContainer title="محصول" createLink="/dashboard/products/create">
      <ProductTable products={products} />
    </TableContainer>
  );
}
