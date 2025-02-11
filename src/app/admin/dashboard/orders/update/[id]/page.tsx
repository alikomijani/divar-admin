import { getBadgeById } from "@/api/server-api/badges";
import type { ServerPageProps } from "@/api/server-api/types";
import { CreateBadgeForm } from "@/components/admin/forms/create-badge";
import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

export default async function UpdateBadgePage({ params }: ServerPageProps) {
  const { badgeID } = await params;
  const badge = await getBadgeById(badgeID);
  return (
    <Box maxWidth={500}>
      <Card>
        <CardContent>
          <Typography variant="h5">ویرایش برچسب</Typography>
          <CreateBadgeForm defaultValue={badge} />
        </CardContent>
      </Card>
    </Box>
  );
}
