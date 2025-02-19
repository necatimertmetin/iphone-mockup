import { IconButton } from "@mui/material";
import { ButtonProps } from "./types";

export const MediumButton = ({ children }: ButtonProps) => {
  return (
    <IconButton
      size="small"
      sx={{
        height: "48px",
        width: "48px",
        background:
          "linear-gradient(135deg, #36373d 0%, rgba(21,20,25,1) 100%)",
        border: "3px solid #202026",
        boxShadow: "-3px -3px 5px #ffffff22, 3px 3px 5px #000000dd",
      }}
    >
      {children}
    </IconButton>
  );
};
export const LargeButton = ({ children, clicked }: ButtonProps) => {
  return (
    <IconButton
      size="small"
      sx={{
        height: "72px",
        width: "72px",
        background: clicked
          ? "linear-gradient(135deg, #246083 0%, #53c4d5 100%)"
          : "linear-gradient(135deg, #36373d 0%, #151419 100%)",
        border: clicked ? "3px solid #117f92" : "3px solid #202026",
        boxShadow: "-3px -3px 5px #ffffff18, 3px 3px 5px #000000dd",
      }}
    >
      {children}
    </IconButton>
  );
};
