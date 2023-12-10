import { CheckCircleOutlined, Close } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";

function CompletedItem({ item, setCompletedList }) {
  function removeItem() {
    setCompletedList((prev) => {
      const newArr = [...prev];
      return newArr.filter((i) => i.id !== item.id);
    });
  }
  return (
    <Box mt="0.5em">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        height="40px"
      >
        <Box display="flex" gap="0.5em" alignItems="center">
          <CheckCircleOutlined color="success" />
          <Typography variant="body1">
            {item.name.length > 20
              ? item.name.substring(0, 20) + "..."
              : item.name.substring(0, 20)}
          </Typography>
        </Box>
        <IconButton sx={{ p: "4px" }} onClick={removeItem}>
          <Close />
        </IconButton>
      </Box>
    </Box>
  );
}

export default CompletedItem;
