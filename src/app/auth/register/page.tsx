import RegisterForm from "@/components/forms/RegisterForm";
import {
  Card,
  CardContent,
  Stack,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import Link from "next/link";

function Register() {
  return (
    <Card sx={{ width: 500 }} elevation={8}>
      <CardContent
        sx={{
          padding: 4,
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h5">ثبت نام</Typography>
          <MuiLink component={Link} href="/auth/login">
            قبلا ثبت نام کرده‌اید؟
          </MuiLink>
        </Stack>
        <RegisterForm />
      </CardContent>
    </Card>
  );
}

export default Register;
