import { IconButton, Grid2, Typography, useTheme } from "@mui/material";
import { importTemplateIcon } from "./Icons";
import { useState, useEffect } from "react";
import { HomepageProps } from "../../../../Homepage/Homepage";

export const AppButton = ({ customApp }: HomepageProps) => {
  const [templateIcon, setTemplateIcon] = useState<string | null>(null);
  const theme = useTheme();
  useEffect(() => {
    if (!customApp.image) {
      importTemplateIcon().then((icon) => setTemplateIcon(icon.template));
    }
  }, []);

  return (
    <Grid2
      size={3}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <IconButton size="small" onClick={customApp.onClick}>
        <img
          src={customApp.image ?? templateIcon ?? ""}
          alt={customApp.title}
          style={{
            pointerEvents: "none",
            height: "60px",
            width: "60px",
            objectFit: "contain",
            padding: customApp.enableBorder ? "5px" : "0px",
            borderRadius: customApp.enableBorder ? "20px" : "0px",
            backgroundColor: customApp.enableBorder
              ? theme.palette.text.primary
              : "",
          }}
        />
      </IconButton>
      <Typography
        textAlign={"center"}
        textTransform={"capitalize"}
        fontSize={"12px"}
      >
        {customApp.title}
      </Typography>
    </Grid2>
  );
};
