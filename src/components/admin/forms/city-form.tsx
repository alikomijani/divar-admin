"use client";
import { createOrUpdateCityAction } from "@/actions/city";
import { Stack } from "@mui/material";
import { useActionState } from "react";
import type { ICity } from "@/api/server-api/types";
import AIForm from "./AIForm";
import SubmitButton from "@/components/SubmitButton";

type CityFormProps = {
  defaultValue?: ICity;
};
export default function CityForm({ defaultValue }: CityFormProps) {
  const [state, action] = useActionState(createOrUpdateCityAction, {
    message: "",
    success: false,
    errors: {},
  });
  return (
    <form action={action}>
      {defaultValue?.id && <input defaultValue={defaultValue.id} name="id" />}
      <Stack mt={2} spacing={2}>
        <AIForm
          schema={[
            {
              name: "code",
              type: "string",
              label: "پیش شماره",
              defaultValue: defaultValue?.code,
              error: !!state.errors?.code,
              helperText: state.errors?.code,
            },
            {
              name: "slug",
              label: "نشانک",
              type: "string",
              defaultValue: defaultValue?.slug,
              error: !!state.errors?.slug,
              helperText: state.errors?.slug,
            },
            {
              name: "name",
              type: "string",
              label: "نام شهر",
              defaultValue: defaultValue?.name,
              error: !!state.errors?.name,
              helperText: state.errors?.name,
            },
          ]}
        />
        <SubmitButton variant="contained">ایجاد شهر</SubmitButton>
      </Stack>
    </form>
  );
}
