import { Box } from "@mui/material";
import React from "react";
import { Appbar } from "../components/Appbar";

interface ScreenProps {
  children: React.ReactNode;
}

export const Screen: React.FC<ScreenProps> = ({ children }) => {
  return (
    <Box
      sx={{
        width: "392px",
        paddingLeft: "6px",
        borderRadius: "60px",
        overflow: "hidden",
      }}
    >
      <Appbar />
      {children}
    </Box>
  );
};
