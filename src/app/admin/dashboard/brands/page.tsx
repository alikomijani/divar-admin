import type { ServerPageProps } from "@/api/server-api/types";
import { TableContainer } from "@/components/admin/tables/TableContainer";
import { BrandsTable } from "./brands-table";
import { getBrands } from "@/api/server-api/brands";

export default async function BrandsPage({ searchParams }: ServerPageProps) {
  const params = await searchParams;
  const brands = getBrands(params);
  return (
    <TableContainer createLink="/admin/dashboard/brands/create" title="برند">
      <BrandsTable brands={brands} />
    </TableContainer>
  );
}
