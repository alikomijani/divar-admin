"use client";

import { createOrUpdateProductAction } from "@/actions/products";
import { IProduct } from "@/api/server-api/types";
import { Stack } from "@mui/material";
import React, { useActionState } from "react";
import AIForm from "./AIForm";
import SubmitButton from "../SubmitButton";
import CategoryField from "../fileds/category-filed";
import SingleUpload from "../upload/single-upload";

type ProductFormProps = {
  defaultValue?: IProduct;
};

function ProductForm({ defaultValue }: ProductFormProps) {
  const [state, action] = useActionState(createOrUpdateProductAction, {
    message: "",
    success: false,
  });
  return (
    <form action={action}>
      {defaultValue?.id && (
        <input hidden name="id" defaultValue={defaultValue.id} />
      )}
      <Stack spacing={2} mt={2}>
        <SingleUpload
          name="images.main"
          defaultValue={defaultValue?.images.main}
        />
        <SingleUpload
          multi
          name="images.list"
          defaultValue={defaultValue?.images.list}
        />
        <CategoryField name="category" defaultValue={defaultValue?.category} />
        <AIForm
          schema={[
            {
              name: "code",
              type: "number",
              label: "کد کالا",
              defaultValue: defaultValue?.code,
              error: !!state.errors?.code,
              helperText: state.errors?.code,
            },
            {
              name: "titleFa",
              label: "نام فارسی",
              size: 6,
              type: "string",
              defaultValue: defaultValue?.titleFa,
              error: !!state.errors?.titleFa,
              helperText: state.errors?.titleFa,
            },
            {
              name: "titleEn",
              label: "نام انگلیسی",
              size: 6,
              type: "string",
              defaultValue: defaultValue?.titleEn,
              error: !!state.errors?.titleEn,
              helperText: state.errors?.titleEn,
            },
            {
              name: "expert_reviews",
              label: "توضیحات",
              type: "textarea",
              defaultValue: defaultValue?.expert_reviews,
              error: !!state.errors?.expert_reviews,
              helperText: state.errors?.expert_reviews,
            },
          ]}
        />
        <SubmitButton variant="contained">ذخیره</SubmitButton>
      </Stack>
    </form>
  );
}

export default ProductForm;
