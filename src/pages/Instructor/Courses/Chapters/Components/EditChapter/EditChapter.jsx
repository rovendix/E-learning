import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography/Typography";
import { useFormik } from "formik";
import { LoadingButton } from "@mui/lab";
import axios from "axios";
import { useState } from "react";
import { BaseApi } from "../../../../../../util/BaseApi";
import { useLocation } from "react-router-dom";
import useGetParams from "../../../../../../hooks/useGetParams";

export default function EditChapter({
  open,
  setOpen,
  setRefetch,
  chapterId,
  title,
}) {
  const [saving, setSaving] = useState(false);
  const [submittingError, setSubmittingError] = useState(false);
  const params = useGetParams();
  const formik = useFormik({
    initialValues: {
      title,
    },
    onSubmit: (values) => {
      setSaving(true);
      axios
        .patch(BaseApi + `/course/${params[0]}/chapter/${chapterId}`, values, {
          headers: {
            "Content-Type": "application/json",
            token: `${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          handleClose();
          setRefetch(true);
        })
        .catch((err) => {
          setSaving(false);
          setSubmittingError(err);
        });
    },
  });
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        ".MuiPaper-root": {
          width: "500px",
          backgroundColor: (theme) => theme.palette.background.b1,
          backgroundImage: "none",
        },
      }}
    >
      <DialogTitle
        sx={{
          borderBottom: (theme) => `1px solid ${theme.palette.primary.border}`,
        }}
      >
        Update Chapter
      </DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          id="title"
          label="Chapter Title"
          type="text"
          fullWidth
          variant="standard"
          value={formik.values.title}
          onChange={formik.handleChange}
          autoFocus
          autoComplete="off"
        />
        {submittingError && (
          <Typography color="error" pt="0.5em">
            Something went wrong.
          </Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <LoadingButton
          onClick={formik.handleSubmit}
          loading={saving}
          disabled={formik.values.chapterTitle === ""}
        >
          Save
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
}
