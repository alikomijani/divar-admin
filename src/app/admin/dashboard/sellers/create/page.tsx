import SellerForm from "@/components/admin/forms/seller-from";
import { Box, Card, CardContent, Typography } from "@mui/material";

export default async function CreateBadge() {
  return (
    <Box maxWidth={500}>
      <Card>
        <CardContent>
          <Typography variant="h5">ایجاد فروشگاه جدید</Typography>
          <SellerForm />
        </CardContent>
      </Card>
    </Box>
  );
}
