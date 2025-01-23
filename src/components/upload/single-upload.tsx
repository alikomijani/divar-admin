"use client";
import { Box, CircularProgress, IconButton } from "@mui/material";
import React, { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { upload } from "@/api/client-api/upload";
import { useAuth } from "../AuthProvider";
type Props = {
  name: string;
  defaultValue?: string;
};

export default function SingleUpload({ name, defaultValue = "" }: Props) {
  const accessToken = useAuth();
  const [url, setUrl] = useState(defaultValue);
  const [progress, setProgress] = useState(0);
  const handleFileSelected = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl("");
    const image = e.target.files?.[0];
    const formData = new FormData();
    if (image) {
      formData.set("image", image);
      const res = await upload(formData, {
        onUploadProgress: (event) =>
          setProgress(Math.round((event.loaded / (event.total || 1)) * 100)),
        headers: {
          Authorization: "bearer " + accessToken,
        },
      });
      setUrl(res.data.url);
    }
  };

  return (
    <>
      <input type="hidden" name={name} defaultValue={url} />
      <Box
        sx={{
          width: "100%",
          minHeight: 200,
          border: (theme) => `1px solid ${theme.palette.divider}`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${url})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <Box sx={{ position: "relative", display: "inline-flex" }}>
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton
              size="large"
              component="label"
              color="primary"
              tabIndex={-1}
              sx={{
                zIndex: 10,
              }}
            >
              <CloudUploadIcon />
              <input
                type="file"
                name="image"
                onChange={handleFileSelected}
                hidden
                accept="image/png, image/gif, image/jpeg"
              />
            </IconButton>
          </Box>
          <CircularProgress size={40} value={progress} variant="determinate" />
        </Box>
      </Box>
    </>
  );
}
