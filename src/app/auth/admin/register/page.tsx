import RegisterForm from "@/components/admin/forms/RegisterForm";
import { Stack, Typography, Link as MuiLink, Box } from "@mui/material";
import Link from "next/link";

async function Register() {
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5">ثبت نام</Typography>
        <MuiLink component={Link} href="/auth/login">
          قبلا ثبت نام کرده‌اید؟
        </MuiLink>
      </Stack>
      <RegisterForm>
        <input hidden name="role" defaultValue={3} />
      </RegisterForm>
    </Box>
  );
}

export default Register;
