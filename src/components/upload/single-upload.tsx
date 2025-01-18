import { Button } from "@mui/material";
import React, { FormEvent, useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
type Props = { name: string; label: string };

export default function SingleUpload({ name, label }: Props) {
  const [url, setUrl] = useState("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      بارگزاری
      <form onSubmit={handleSubmit}>
        <input type="file" hidden accept="image/png, image/gif, image/jpeg" />
      </form>
      <input
        name={name}
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        type="url"
        hidden
      />
    </Button>
  );
}
