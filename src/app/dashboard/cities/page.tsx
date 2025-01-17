import CityTable from "../../../components/tables/CityTable";
import {
  Box,
  Button,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
  Typography,
} from "@mui/material";
import { Suspense } from "react";
import Link from "next/link";
import TableLoading from "@/components/tables/TableLoading";

export default async function Cities({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  return (
    <Box>
      <Paper>
        <Toolbar>
          <Typography
            variant="h5"
            sx={{
              flex: "1 1 100%",
            }}
          >
            شهرها
          </Typography>
          <Button
            component={Link}
            href="cities/create"
            sx={{
              flexShrink: 0,
            }}
            variant="contained"
          >
            شهر جدید
          </Button>
        </Toolbar>
        <Suspense fallback={<TableLoading columnCount={6} />}>
          <CityTable searchParams={searchParams} />
        </Suspense>
      </Paper>
    </Box>
  );
}
