import RegisterForm from "@/components/admin/forms/RegisterForm";
import { Stack, Typography, Link as MuiLink, Box } from "@mui/material";
import Link from "next/link";

async function Register() {
  return (
    <Box>
      <Stack alignItems="center" direction="row" justifyContent="space-between">
        <Typography variant="h5">ثبت نام</Typography>
        <MuiLink component={Link} href="/auth/login">
          قبلا ثبت نام کرده‌اید؟
        </MuiLink>
      </Stack>
      <RegisterForm isShop>
        <input hidden defaultValue={2} name="role" />
      </RegisterForm>
    </Box>
  );
}

export default Register;
