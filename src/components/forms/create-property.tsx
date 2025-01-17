"use client";
import { Button, IconButton, Stack, TextField } from "@mui/material";
import React, { useActionState, useState } from "react";
import SubmitButton from "../SubmitButton";
import { createPropertyAction } from "@/actions/property";
import { Remove } from "@mui/icons-material";
type Props = {};

export default function CreatePropertyForm({}: Props) {
  const [state, action] = useActionState(createPropertyAction, undefined);
  const [options, setOptions] = useState([new Date().toISOString()]);
  const addOption = () => {
    const t = new Date().toISOString();
    setOptions((old) => [...old, t]);
  };
  const removeOption = (value: string) => {
    setOptions((old) => old.filter((item) => item !== value));
  };
  return (
    <form action={action}>
      <Stack spacing={2} mt={2}>
        <TextField fullWidth name="name" label="نام ویژگی" />
        <TextField fullWidth name="label" label="نام قابل نمایش" />
        <TextField fullWidth name="type" defaultValue={"string"} label="نوع" />
        {options.map((item, index) => (
          <Stack direction={"row"} spacing={2} key={item}>
            <TextField
              fullWidth
              name={`options.${index}.label`}
              label="برچسب"
            />
            <TextField
              fullWidth
              name={`options.${index}.value`}
              label="مقدار"
            />
            <IconButton onClick={() => removeOption(item)}>
              <Remove />
            </IconButton>
          </Stack>
        ))}

        <Button onClick={addOption}>اضافه کردن آپشن</Button>
        <SubmitButton variant="contained">ایجاد ویژگی</SubmitButton>
      </Stack>
    </form>
  );
}
