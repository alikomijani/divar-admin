"use client";
import { createOrUpdateSellerAction } from "@/actions/sellers";
import { Stack } from "@mui/material";
import { useActionState } from "react";
import SubmitButton from "@/components/SubmitButton";
import type { ISeller } from "@/api/server-api/types";
import AIForm from "./AIForm";
import UserField from "../fields/user-field";

type SellerFormProps = {
  defaultValue?: ISeller;
};
export default function SellerForm({ defaultValue }: SellerFormProps) {
  const [state, action] = useActionState(createOrUpdateSellerAction, {
    message: "",
    success: false,
  });
  return (
    <form action={action}>
      {defaultValue?.id && (
        <input hidden defaultValue={defaultValue.id} name="id" />
      )}
      <Stack mt={2} spacing={2}>
        <UserField
          defaultValue={defaultValue?.user}
          error={!!state?.errors?.user}
          helperText={state?.errors?.user}
          name="user"
        />
        <AIForm
          schema={[
            {
              name: "name",
              type: "string",
              label: "نام",
              defaultValue: defaultValue?.name,
              error: !!state.errors?.name,
              helperText: state.errors?.name,
            },
            {
              name: "slug",
              label: "نشانک",
              type: "string",
              defaultValue: defaultValue?.slug,
              error: !!state.errors?.slug,
              helperText: state.errors?.slug,
            },
          ]}
        />
        <SubmitButton variant="contained">ذخیره</SubmitButton>
      </Stack>
    </form>
  );
}
