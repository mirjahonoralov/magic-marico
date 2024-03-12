import { Box, Stack, TextField, TextFieldProps } from "@mui/material";
import React from "react";

interface CustomTextFieldProps extends Omit<TextFieldProps, "variant" | "fullWidth"> {
  label: string;
}

const CustomTextField: React.FC<CustomTextFieldProps> = (props) => {
  const { label } = props;
  return (
    <Stack gap="10px">
      <Box color="#fff">{label}</Box>
      <TextField color="info" {...props} label="" InputProps={{ sx: { bgcolor: "#fff", borderRadius: "7px" } }} />
    </Stack>
  );
};

export default CustomTextField;
