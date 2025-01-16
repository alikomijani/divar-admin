import LoginForm from "@/components/forms/LoginForm";
import {
  Card,
  CardContent,
  Stack,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import Link from "next/link";

export default function Login() {
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
          <Typography variant="h5">ورود</Typography>
          <MuiLink component={Link} href="/auth/register">
            ساخت اکانت
          </MuiLink>
        </Stack>
        <LoginForm />
      </CardContent>
    </Card>
  );
}
