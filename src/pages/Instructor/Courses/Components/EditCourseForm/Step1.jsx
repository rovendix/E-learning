import { Box, TextField } from "@mui/material";
import React from "react";
import TextEditor from "../../../../../Components/TextEditor/TextEditor";

function Step1({ formik }) {
  return (
    <Box display="flex" flexDirection="column" gap="1em">
      <TextField
        id="title"
        label="Title"
        variant="outlined"
        sx={{ width: "100%" }}
        onChange={formik.handleChange}
        value={formik.values.title}
      />
      <TextField
        id="subtitle"
        label="Subtitle"
        variant="outlined"
        sx={{ width: "100%" }}
        onChange={formik.handleChange}
        value={formik.values.subtitle}
      />
      <TextEditor
        id="description"
        label="Description"
        sx={{ width: "100%", height: "450px" }}
        onChange={(value) => {
          formik.setFieldValue("description", value);
        }}
        value={formik.values.description}
        placeholder="Write a description for your course..."
      />
    </Box>
  );
}

export default Step1;
