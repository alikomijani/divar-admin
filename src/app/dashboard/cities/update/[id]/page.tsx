import { getCityById } from "@/api/server-api/city";
import { ServerPageProps } from "@/api/server-api/types";
import CityForm from "@/components/forms/city-form";
import { Box, Card, CardContent, Typography } from "@mui/material";

export default async function UpdateCity({ params }: ServerPageProps) {
  const { id } = await params;
  const City = await getCityById(id);
  return (
    <Box maxWidth={500}>
      <Card>
        <CardContent>
          <Typography variant="h5">ویرایش دسته بندی</Typography>
          <CityForm defaultValue={City} />
        </CardContent>
      </Card>
    </Box>
  );
}
