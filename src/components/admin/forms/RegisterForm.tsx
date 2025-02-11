"use client";
import { registerAction } from "@/actions/auth/register";
import {
  Alert,
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import type { PropsWithChildren} from "react";
import React, { useActionState } from "react";

interface RegisterFormProps extends PropsWithChildren {
  isShop?: boolean;
}
function RegisterForm({ children, isShop = false }: RegisterFormProps) {
  const [state, action, pending] = useActionState(registerAction, {
    message: "",
    errors: {},
  });
  return (
    <form action={action}>
      <Stack gap={3}>
        {state.message && <Alert severity="warning">{state.message}</Alert>}
        <Stack
          alignItems="center"
          direction="row"
          gap={1}
          justifyContent="space-between"
          mt={2}
        >
          <TextField
            fullWidth
            error={!!state?.errors?.firstName}
            helperText={state?.errors?.firstName}
            label="نام"
            name="firstName"
            size="small"
            variant="outlined"
          />
          <TextField
            fullWidth
            error={!!state?.errors?.lastName}
            helperText={state?.errors?.lastName}
            label="نام خانوادگی"
            name="lastName"
            size="small"
            variant="outlined"
          />
        </Stack>
        <TextField
          fullWidth
          error={!!state?.errors?.email}
          helperText={state?.errors?.email}
          label="رایانامه"
          name="email"
          size="small"
          type="email"
          variant="outlined"
        />
        <TextField
          fullWidth
          error={!!state?.errors?.password}
          label="کلمه عبور"
          name="password"
          size="small"
          type="password"
          variant="outlined"
          helperText={state?.errors?.password?.map((e: string) => (
            <Box key={e} component="span" display="block">
              {e}
            </Box>
          ))}
        />
        {isShop && (
          <>
            <TextField
              fullWidth
              error={!!state?.errors?.shopName}
              helperText={state?.errors?.shopName}
              label="نام فروشگاه"
              name="shopName"
              size="small"
              type="text"
              variant="outlined"
            />
            <TextField
              fullWidth
              error={!!state?.errors?.shopSlug}
              helperText={state?.errors?.shopSlug}
              label="نشانک"
              name="shopSlug"
              size="small"
              type="text"
              variant="outlined"
            />
          </>
        )}
        {children}
        <Typography variant="caption">
          با ثبت نام در سرویس ما شما با همه قوانین سرویس موافقت خود را اعلام
          میدارید.
        </Typography>
        <Button
          disableElevation
          disabled={pending}
          type="submit"
          variant="contained"
        >
          ثبت نام
        </Button>
      </Stack>
    </form>
  );
}

export default RegisterForm;
