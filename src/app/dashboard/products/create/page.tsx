import { CreateCityForm } from "@/components/forms/create-city";
import { Box, Card, CardContent, Typography } from "@mui/material";

export default async function CreateCity() {
  return (
    <Box maxWidth={500}>
      <Card>
        <CardContent>
          <Typography variant="h5">ایجاد شهر جدید</Typography>
          <CreateCityForm />
        </CardContent>
      </Card>
    </Box>
  );
}
