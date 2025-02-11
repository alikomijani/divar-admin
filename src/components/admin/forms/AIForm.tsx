import SingleUpload from "@/components/upload/single-upload";
import { Grid2, TextField } from "@mui/material";
import type { ReactNode } from "react";
import React from "react";

type FormField = {
  type: "string" | "number" | "image" | "email" | "textarea" | "color";
  name: string;
  placeholder?: string;
  label?: string;
  defaultValue?: unknown;
  error?: boolean;
  helperText?: ReactNode;
  size?: number;
};

type AIFormProps = {
  schema: FormField[];
};

export default function AIForm({ schema }: AIFormProps) {
  return (
    <Grid2 container spacing={2}>
      {schema.map((item) => (
        <Grid2 key={item.name} size={item.size ?? 12}>
          {item.type === "image" ? (
            <SingleUpload
              defaultValue={item.defaultValue as string}
              name={item.name}
            />
          ) : (
            <TextField
              fullWidth
              defaultValue={item.defaultValue}
              error={item.error}
              helperText={item.helperText}
              label={item.label}
              multiline={item.type === "textarea"}
              name={item.name}
              placeholder={item.placeholder}
              rows={5}
              type={item.type}
            />
          )}
        </Grid2>
      ))}
    </Grid2>
  );
}

// const component: Record<FormField["type"], Component> = {
//   email: TextField,
//   image: SingleUpload,
//   number: TextField,
//   string: TextField,
//   textarea: TextAre,
// };
