"use client";
import { createOrUpdateColorAction } from "@/actions/colors";
import { Stack } from "@mui/material";
import { useActionState } from "react";
import type { IColor } from "@/api/server-api/types";
import AIForm from "./AIForm";
import SubmitButton from "@/components/SubmitButton";

type ColorFormProps = {
  defaultValue?: IColor;
};
export default function ColorForm({ defaultValue }: ColorFormProps) {
  const [state, action] = useActionState(createOrUpdateColorAction, {
    message: "",
    success: false,
  });
  return (
    <form action={action}>
      {defaultValue?.id && (
        <input hidden defaultValue={defaultValue.id} name="id" />
      )}
      <Stack mt={2} spacing={2}>
        <AIForm
          schema={[
            {
              name: "title",
              type: "string",
              label: "نام رنگ",
              defaultValue: defaultValue?.title,
              error: !!state.errors?.title,
              helperText: state.errors?.title,
            },
            {
              name: "hexCode",
              label: "کد رنگ",
              type: "color",
              defaultValue: defaultValue?.hexCode,
              error: !!state.errors?.hexCode,
              helperText: state.errors?.hexCode,
            },
          ]}
        />
        <SubmitButton variant="contained">ذخیره</SubmitButton>
      </Stack>
    </form>
  );
}
