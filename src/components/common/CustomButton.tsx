import { Button, ButtonProps, styled } from "@mui/material";
import React from "react";

interface CustomButtonProps extends ButtonProps {}

const CustomButtonStyle = styled(Button)({
  backgroundColor: "var(--primary)",
  color: "#fff",
  fontSize: "20px",
  fontWeight: 500,
  textTransform: "capitalize",
  padding: "10px 20px",
  "&:hover": {
    backgroundColor: "var(--primary)",
  },
  borderRadius: "10px",
});

const CustomButton: React.FC<CustomButtonProps> = ({ children, ...props }) => {
  return <CustomButtonStyle {...props}>{children}</CustomButtonStyle>;
};

export default CustomButton;
