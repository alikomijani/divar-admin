"use client";
import { Stack, TextField } from "@mui/material";
import { useActionState, useState } from "react";
import SubmitButton from "../SubmitButton";
import { createBadgeAction } from "@/actions/badges";
import SingleUpload from "../upload/single-upload";

export const CreateBadgeForm = () => {
  const [state, action] = useActionState(createBadgeAction, undefined);
  const [url, setUrl] = useState("");
  console.log(url);
  console.log(state);
  return (
    <Stack spacing={2}>
      <SingleUpload url={url} setUrl={setUrl} />
      <form action={action}>
        <input type="hidden" name="icon" defaultValue={url} />
        <Stack spacing={2}>
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
    </Stack>
  );
};
