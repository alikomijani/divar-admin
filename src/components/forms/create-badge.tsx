"use client";
import { Stack, TextField } from "@mui/material";
import { useActionState } from "react";
import SubmitButton from "../SubmitButton";
import { createBadgeAction } from "@/actions/badges";
import SingleUpload from "../upload/single-upload";

export const CreateBadgeForm = () => {
  const [state, action] = useActionState(createBadgeAction, undefined);
  return (
    <form action={action}>
      <Stack spacing={2} mt={2}>
        <SingleUpload name="icon" label="آیکون" />
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
