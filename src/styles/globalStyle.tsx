import { Typography } from "@mui/material";
import styled from "styled-components";

type textType = {
  fs?: string;
  c?: string;
  fw?: string;
  o?: string;
  ff?: string;
};

export const Text = styled(Typography)<textType>`
  font-size: ${({ fs }) => fs} !important;
  color: ${({ c }) => (c ? c : "#fff")} !important;
  font-weight: ${({ fw }) => (fw ? fw : "400")} !important;
  font-family: ${({ ff }) => (ff ? ff : "Poppins, sans-serif ")} !important;
  opacity: ${({ o }) => (o ? o : 1)} !important;
`;
