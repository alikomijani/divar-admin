"use client";
import { Stack, TextField } from "@mui/material";
import { useActionState, useState } from "react";
import SubmitButton from "../SubmitButton";
import { createOrUpdateBadgeAction } from "@/actions/badges";
import SingleUpload from "../upload/single-upload";
import { IBadge } from "@/api/server-api/types";

type CreateBadgeFormProps = { defaultValue?: Partial<IBadge> };

export const CreateBadgeForm = ({ defaultValue }: CreateBadgeFormProps) => {
  const [state, action] = useActionState(
    createOrUpdateBadgeAction,
    undefined,
    "/dashboard/badges"
  );
  const [url, setUrl] = useState(defaultValue?.icon || "");
  return (
    <Stack spacing={2}>
      <SingleUpload url={url} setUrl={setUrl} />
      <form action={action}>
        <input type="hidden" name="icon" defaultValue={url} />
        {defaultValue?.id && (
          <input type="hidden" name="id" defaultValue={defaultValue?.id} />
        )}
        <Stack spacing={2}>
          <TextField
            error={state?.errors.title}
            helperText={state?.errors?.title}
            fullWidth
            defaultValue={defaultValue?.title}
            name="title"
            label="عنوان"
          />
          <SubmitButton variant="contained">ذخیره</SubmitButton>
        </Stack>
      </form>
    </Stack>
  );
};
