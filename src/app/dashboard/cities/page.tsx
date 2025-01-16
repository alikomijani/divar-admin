import { getCities } from "@/app/server-api/city";

import CityTable from "./CityTable";
import {
  Box,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Suspense } from "react";

export default async function Cities() {
  getCities();
  return (
    <Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>شناسه</TableCell>
              <TableCell>کد شهر</TableCell>
              <TableCell>نام فارسی</TableCell>
              <TableCell>شناسه کد</TableCell>
              <TableCell>تاریخ ساخت</TableCell>
              <TableCell>آخرین بروزرسانی</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <Suspense fallback={<CityTableLoading />}>
              <CityTable />
            </Suspense>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

const CityTableLoading = () => (
  <TableRow>
    <TableCell sx={{ minHeight: 10 }}>
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
    </TableCell>
    <TableCell>
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
    </TableCell>
    <TableCell>
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
    </TableCell>
    <TableCell>
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
    </TableCell>
    <TableCell>
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
    </TableCell>
    <TableCell>
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
    </TableCell>
  </TableRow>
);
