"use client";

import type {
  ButtonProps} from "@mui/material";
import {
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import { useFormStatus } from "react-dom";

export default function SubmitButton({
  disabled,
  children,
  ...rest
}: ButtonProps) {
  const { pending } = useFormStatus();
  return (
    <Button disabled={disabled || pending} type="submit" {...rest}>
      {pending ? (
        <Stack alignItems="center" direction="row" gap={1}>
          <CircularProgress size={12} />
          <Typography>در حال ثبت</Typography>
        </Stack>
      ) : (
        children
      )}
    </Button>
  );
}
