import { ServerPageProps } from "@/app/server-api/types";
import { TableContainer } from "@/components/tables/TableContainer";
import { BrandsTable } from "./brands-table";
import { getBrands } from "@/app/server-api/brands";

export default async function BrandsPage({ searchParams }: ServerPageProps) {
  const params = await searchParams;
  const brands = await getBrands(params);
  return (
    <TableContainer title="برند" createLink="/dashboard/brands/create">
      <BrandsTable brands={brands} />
    </TableContainer>
  );
}
