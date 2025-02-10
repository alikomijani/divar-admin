import { getCategories } from "@/api/server-api/categories";
import { ServerPageProps } from "@/api/server-api/types";
import { TableContainer } from "@/components/admin/tables/TableContainer";
import { CategoriesTable } from "./category-table";

export default async function CategoryPage({ searchParams }: ServerPageProps) {
  const params = await searchParams;
  const categories = await getCategories(params);
  return (
    <TableContainer
      title="دسته بندی"
      createLink="/admin/dashboard/categories/create"
    >
      <CategoriesTable categories={categories} />
    </TableContainer>
  );
}
