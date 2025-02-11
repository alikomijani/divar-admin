import { getCategories } from "@/api/server-api/categories";
import type { ServerPageProps } from "@/api/server-api/types";
import { TableContainer } from "@/components/admin/tables/TableContainer";
import { CategoriesTable } from "./category-table";

export default async function CategoryPage({ searchParams }: ServerPageProps) {
  const params = await searchParams;
  const categories = await getCategories(params);
  return (
    <TableContainer
      createLink="/admin/dashboard/categories/create"
      title="دسته بندی"
    >
      <CategoriesTable categories={categories} />
    </TableContainer>
  );
}
