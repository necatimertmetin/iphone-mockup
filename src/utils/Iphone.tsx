import React from "react";
import Notchless from "/notchless.svg";
import { Box } from "@mui/material";
import { Notch } from "./Notch";
interface IphoneProps {
  children: React.ReactNode;
}

export const Iphone: React.FC<IphoneProps> = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundImage: Notchless,
        width: "400px",
        height: "824.46px",
        position: "relative",
        borderRadius: "60px",
        overflow: "hidden",
      }}
    >
      <Notch />
      {children}
    </Box>
  );
};
