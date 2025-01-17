import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import TablePagination from "./TablePagination";
import { ReactNode } from "react";
import { PaginatedResultApi } from "@/app/server-api/types";
interface Column<T extends { id: string }> {
  title: string;
  render: (row: T) => ReactNode;
}
interface AITableProps<T extends { id: string }> {
  schema: Column<T>[];
  data: PaginatedResultApi<T>;
}

export default function AITable<T extends { id: string }>({
  schema,
  data,
}: AITableProps<T>) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {schema.map((item) => (
              <TableCell key={item.title}>{item.title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.results.map((row) => (
            <TableRow key={row.id}>
              {schema.map((item, index) => (
                <TableCell key={row.id.toString() + item.title}>
                  {item.render(row)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination count={data.total} />
    </TableContainer>
  );
}
