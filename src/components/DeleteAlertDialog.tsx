"use client";
import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/material";

interface AlertDialogProps {
  children?: React.ReactNode;
  onConfirm: () => void;
}
export default function DeleteAlertDialog({
  children,
  onConfirm,
}: AlertDialogProps) {
  const [isLoading, setTransitioning] = React.useTransition();
  const handleConfirm = () => {
    setTransitioning(async () => {
      await onConfirm();
      handleClose();
    });
  };
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box onClick={handleClickOpen}>{children}</Box>
      <Dialog
        aria-describedby="alert-dialog-description"
        aria-labelledby="alert-dialog-title"
        open={open}
        onClose={handleClose}
      >
        <DialogTitle id="alert-dialog-title">
          آیا از حذف این مدل مطمئن هستید؟
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            این عملیات قابل بازگشت نیست.
            <br />
            در صورتی که در سایر مدل ها از این نمونه استفاده شده باشد دیتای آن از
            دست میرود
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus variant="contained" onClick={handleClose}>
            بازگشت
          </Button>

          <Button
            color="error"
            disabled={isLoading}
            variant="outlined"
            onClick={handleConfirm}
          >
            حذف
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
