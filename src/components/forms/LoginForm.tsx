"use client";
import { Box, Button, Stack, TextField } from "@mui/material";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  const state = {};
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    const result = await signIn("credentials", {
      redirect: false, // Prevent automatic redirect
      email,
      password,
    });
    console.log(result);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Stack gap={3}>
        <Stack
          mt={2}
          direction={"row"}
          justifyContent="space-between"
          alignItems="center"
          gap={1}
        ></Stack>
        <TextField
          // error={!!state?.errors?.email}
          // helperText={state?.errors?.email}
          size="small"
          fullWidth
          name="email"
          label="رایانامه"
          variant="outlined"
          type="email"
        />
        <TextField
          // error={!!state?.errors?.password}
          // helperText={state?.errors?.password?.map((e: string) => (
          //   <Box component="span" display="block" key={e}>
          //     {e}
          //   </Box>
          // ))}
          size="small"
          fullWidth
          name="password"
          type="password"
          label="کلمه عبور"
          variant="outlined"
        />
        <Button
          type="submit"
          disabled={false}
          disableElevation
          variant="contained"
        >
          ورود
        </Button>
      </Stack>
    </form>
  );
}
