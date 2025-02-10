import { getColorById } from "@/api/server-api/colors";
import { ServerPageProps } from "@/api/server-api/types";
import ColorForm from "@/components/forms/color-form";
import { Box, Card, CardContent, Typography } from "@mui/material";

export default async function UpdateCity({ params }: ServerPageProps) {
  const { id } = await params;
  const color = await getColorById(id);
  return (
    <Box maxWidth={500}>
      <Card>
        <CardContent>
          <Typography variant="h5">ویرایش رنگ </Typography>
          <ColorForm defaultValue={color} />
        </CardContent>
      </Card>
    </Box>
  );
}
