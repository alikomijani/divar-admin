"use client";
import { Stack, TextField } from "@mui/material";
import { useActionState } from "react";
import { createOrUpdateBadgeAction } from "@/actions/badges";
import type { IBadge } from "@/api/server-api/types";
import SingleUpload from "@/components/upload/single-upload";
import SubmitButton from "@/components/SubmitButton";

type CreateBadgeFormProps = { defaultValue?: Partial<IBadge> };

export const CreateBadgeForm = ({ defaultValue }: CreateBadgeFormProps) => {
  const [state, action] = useActionState(
    createOrUpdateBadgeAction,
    {
      success: false,
      message: "",
    },
    "/dashboard/badges"
  );
  console.log(state);
  return (
    <Stack spacing={2}>
      <form action={action}>
        {defaultValue?.id && (
          <input defaultValue={defaultValue?.id} name="id" type="hidden" />
        )}
        <Stack spacing={2}>
          <SingleUpload defaultValue={defaultValue?.icon} name="icon" />
          <TextField
            fullWidth
            defaultValue={defaultValue?.title}
            error={!!state?.errors?.title}
            helperText={state?.errors?.title}
            label="عنوان"
            name="title"
          />
          <SubmitButton variant="contained">ذخیره</SubmitButton>
        </Stack>
      </form>
    </Stack>
  );
};
