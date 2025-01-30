import { ServerPageProps } from "@/api/server-api/types";
import { TableContainer } from "@/components/tables/TableContainer";
import { UsersTable } from "./user-table";
import { getAllUsers } from "@/api/server-api/users";

export default async function UsersPage({ searchParams }: ServerPageProps) {
  const params = await searchParams;
  const users = getAllUsers(params);
  return (
    <TableContainer title="کاربران" createLink="/dashboard/users/create">
      <UsersTable users={users} />
    </TableContainer>
  );
}
