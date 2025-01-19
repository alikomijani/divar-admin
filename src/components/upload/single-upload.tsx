"use client";
import { Box, Button, Stack } from "@mui/material";
import React, { FormEvent, useRef, useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { upload } from "@/api/client-api/upload";
import Image from "next/image";
type Props = {
  setUrl: (url: string) => void;
  url: string;
};
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ODhhZTI0MGY4Zjk0Y2E2MjhkNmJhMiIsInJvbGUiOjMsImlhdCI6MTczNzA0ODIwMCwiZXhwIjoxNzM3NjUzMDAwfQ.vEyAAgxKOc_4zRUPoc1LWxEQZsXRASzAEzmVRPYx6JM";

export default function SingleUpload({ setUrl, url }: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const [progress, setProgress] = useState(0);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const res = await upload(data, {
      onUploadProgress: (event) =>
        setProgress(Math.round((event.loaded / (event.total || 1)) * 100)),
      headers: {
        Authorization: "bearer " + token,
      },
    });
    console.log(res);
    setUrl(res.data.url);
  };
  return (
    <Stack direction={"row"} spacing={2}>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        بارگزاری
        <form onSubmit={handleSubmit} ref={formRef}>
          <input
            type="file"
            name="image"
            onChange={(e) => {
              if (formRef.current) {
                formRef.current.requestSubmit();
              }
            }}
            hidden
            accept="image/png, image/gif, image/jpeg"
          />
        </form>
      </Button>
      {url && (
        <Box>
          <Image alt="image" width={60} height={60} src={url} />
        </Box>
      )}
    </Stack>
  );
}
