"use client";
import { login } from "@/actions/auth/login";
import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useActionState } from "react";

export default function LoginForm() {
  const [state, action, pending] = useActionState(login, undefined);
  return (
    <form action={action}>
      <Stack gap={3}>
        <Stack
          mt={2}
          direction={"row"}
          justifyContent="space-between"
          alignItems="center"
          gap={1}
        ></Stack>
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
        <Button
          type="submit"
          disabled={pending}
          disableElevation
          variant="contained"
        >
          ورود
        </Button>
      </Stack>
    </form>
  );
}
