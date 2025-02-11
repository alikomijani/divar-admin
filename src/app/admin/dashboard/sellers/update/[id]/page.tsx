import { getSellerById } from "@/api/server-api/sellers";
import type { ServerPageProps } from "@/api/server-api/types";
import SellerForm from "@/components/admin/forms/seller-from";
import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

export default async function UpdateBadgePage({ params }: ServerPageProps) {
  const { id } = await params;
  const seller = await getSellerById(id);
  return (
    <Box maxWidth={500}>
      <Card>
        <CardContent>
          <Typography variant="h5">ویرایش برچسب</Typography>
          <SellerForm defaultValue={seller} />
        </CardContent>
      </Card>
    </Box>
  );
}
