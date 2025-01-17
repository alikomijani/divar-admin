"use client";
import { createCityAction } from "@/actions/city";
import { Stack, TextField } from "@mui/material";
import { useActionState } from "react";
import SubmitButton from "../SubmitButton";

export const CreateCityForm = () => {
  const [state, action] = useActionState(createCityAction, undefined);
  return (
    <form action={action}>
      <Stack spacing={2} mt={2}>
        <TextField fullWidth name="code" label="پیش شماره" />
        <TextField fullWidth name="slug" label="اسلاگ" />
        <TextField fullWidth name="name" label="نام شهر" />
        <SubmitButton variant="contained">ایجاد شهر</SubmitButton>
      </Stack>
    </form>
  );
};
