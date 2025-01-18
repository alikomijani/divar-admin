"use client";
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
import React from "react";
import { Column, PaginatedResultApi } from "@/app/server-api/types";
import AITableRow from "./AITableRow";

interface AITableProps<T extends { id: string }, G extends { id: string }> {
  schema: Column<T>[];
  data: PaginatedResultApi<T>;
  subTable?: { header: string; schema: Column<G>[]; key: keyof T };
}

export default function AITable<
  T extends { id: string },
  G extends { id: string }
>({ schema, data, subTable }: AITableProps<T, G>) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {!!subTable && <TableCell></TableCell>}
            {schema.map((item) => (
              <TableCell key={item.title}>{item.title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.results.map((row) => (
            <AITableRow
              key={row.id}
              schema={schema}
              data={row}
              subTable={subTable}
            />
          ))}
        </TableBody>
      </Table>
      <TablePagination count={data.total} />
    </TableContainer>
  );
}
