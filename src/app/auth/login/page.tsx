import LoginForm from "@/components/admin/forms/LoginForm";
import { Stack, Typography, Link as MuiLink, Box } from "@mui/material";
import Link from "next/link";

export default async function Login() {
  return (
    <Box>
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        my={3}
      >
        <Typography variant="h5">ورود</Typography>
        <MuiLink component={Link} href="/auth/register">
          ساخت اکانت
        </MuiLink>
      </Stack>
      <LoginForm />
    </Box>
  );
}
