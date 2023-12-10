import { Box, TextField } from "@mui/material";
import React from "react";

function Step4({ formik }) {
  return (
    <Box display="flex" flexDirection="column" gap="1em">
      <TextField
        id="price"
        label="Price"
        variant="outlined"
        sx={{ width: "100%" }}
        onChange={formik.handleChange}
        value={formik.values.price}
      />
      <TextField
        id="discount"
        label="Discount"
        variant="outlined"
        sx={{ width: "100%" }}
        onChange={formik.handleChange}
        value={formik.values.discount}
      />
    </Box>
  );
}

export default Step4;
