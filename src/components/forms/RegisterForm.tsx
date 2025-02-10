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
import React, { PropsWithChildren, useActionState } from "react";
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
        {isShop && (
          <>
            <TextField
              error={!!state?.errors?.shopName}
              helperText={state?.errors?.shopName}
              size="small"
              fullWidth
              name="shopName"
              label="نام فروشگاه"
              variant="outlined"
              type="text"
            />
            <TextField
              error={!!state?.errors?.shopSlug}
              helperText={state?.errors?.shopSlug}
              size="small"
              fullWidth
              name="shopSlug"
              label="نشانک"
              variant="outlined"
              type="text"
            />
          </>
        )}
        {children}
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
  );
}

export default RegisterForm;
