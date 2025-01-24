import { Stack, TextField } from "@mui/material";
import React, { ReactNode } from "react";
import SingleUpload from "../upload/single-upload";

type FormField = {
  type: "string" | "number" | "image" | "email" | "textarea";
  name: string;
  placeholder?: string;
  label?: string;
  defaultValue?: string;
  error?: boolean;
  helperText?: ReactNode;
};

type AIFormProps = {
  schema: FormField[];
};

export default function AIForm({ schema }: AIFormProps) {
  return (
    <Stack spacing={2}>
      {schema.map((item) =>
        item.type === "image" ? (
          <SingleUpload
            key={item.name}
            name={item.name}
            defaultValue={item.defaultValue}
          />
        ) : (
          <TextField
            key={item.name}
            rows={5}
            multiline={item.type === "textarea"}
            {...item}
          />
        )
      )}
    </Stack>
  );
}

// const component: Record<FormField["type"], Component> = {
//   email: TextField,
//   image: SingleUpload,
//   number: TextField,
//   string: TextField,
//   textarea: TextAre,
// };
