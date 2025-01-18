"use client";
import { Stack, TextField } from "@mui/material";
import { useActionState } from "react";
import SubmitButton from "../SubmitButton";
import { createBadgeAction } from "@/actions/badges";

export const CreateBadgeForm = () => {
  const [state, action] = useActionState(createBadgeAction, undefined);
  return (
    <form action={action}>
      <Stack spacing={2} mt={2}>
        <TextField
          error={state?.errors?.icon}
          helperText={state?.errors?.icon}
          fullWidth
          name="icon"
          label="آیکن"
        />
        <TextField
          error={state?.errors.title}
          helperText={state?.errors?.title}
          fullWidth
          name="title"
          label="عنوان"
        />
        <SubmitButton variant="contained">ایجاد برچسب</SubmitButton>
      </Stack>
    </form>
  );
};
