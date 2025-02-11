import type { ServerPageProps } from "@/api/server-api/types";
import { TableContainer } from "@/components/admin/tables/TableContainer";
import { UsersTable } from "./user-table";
import { getAllUsers } from "@/api/server-api/users";

export default async function UsersPage({ searchParams }: ServerPageProps) {
  const params = await searchParams;
  const users = getAllUsers(params);
  return (
    <TableContainer createLink="/admin/dashboard/users/create" title="کاربران">
      <UsersTable users={users} />
    </TableContainer>
  );
}
