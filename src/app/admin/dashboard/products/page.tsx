import { ServerPageProps } from "@/api/server-api/types";
import { TableContainer } from "@/components/admin/tables/TableContainer";
import { ProductTable } from "./product-table";
import { getProducts } from "@/api/server-api/products";

export default async function CategoryPage({ searchParams }: ServerPageProps) {
  const params = await searchParams;
  const products = await getProducts(params);
  return (
    <TableContainer title="محصول" createLink="/admin/dashboard/products/create">
      <ProductTable products={products} />
    </TableContainer>
  );
}
