"use client";
import { register } from "@/actions/register";
import {
  Box,
  Button,
  Card,
  CardContent,
  Link as MuiLink,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useActionState } from "react";

type Props = {};

function Register({}: Props) {
  const [state, action, pending] = useActionState(register, undefined);
  console.log(state);
  return (
    <Card sx={{ width: 500 }} elevation={8}>
      <CardContent
        sx={{
          padding: 4,
        }}
      >
        <form action={action}>
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
          <Stack gap={3}>
            <Stack
              mt={2}
              direction={"row"}
              justifyContent="space-between"
              alignItems="center"
              gap={1}
            >
              <TextField
                error={!!state?.errors?.firstName}
                helperText={state?.errors?.firstName}
                size="small"
                fullWidth
                name="firstName"
                label="نام"
                variant="outlined"
              />
              <TextField
                error={!!state?.errors?.lastName}
                helperText={state?.errors?.lastName}
                size="small"
                fullWidth
                name="lastName"
                label="نام خانوادگی"
                variant="outlined"
              />
            </Stack>
            <TextField
              error={!!state?.errors?.email}
              helperText={state?.errors?.email}
              size="small"
              fullWidth
              name="email"
              label="رایانامه"
              variant="outlined"
              type="email"
            />
            <TextField
              error={!!state?.errors?.password}
              helperText={state?.errors?.password?.map((e: string) => (
                <Box component="span" display="block" key={e}>
                  {e}
                </Box>
              ))}
              size="small"
              fullWidth
              name="password"
              type="password"
              label="کلمه عبور"
              variant="outlined"
            />
            <Typography variant="caption">
              با ثبت نام در سرویس ما شما با همه قوانین سرویس موافقت خود را اعلام
              میدارید.
            </Typography>
            <Button
              type="submit"
              disabled={pending}
              disableElevation
              variant="contained"
            >
              ثبت نام
            </Button>
          </Stack>
        </form>
      </CardContent>
    </Card>
  );
}

export default Register;
