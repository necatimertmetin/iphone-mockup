import { IconButton, Grid2, Typography, useTheme } from "@mui/material";
import { importTemplateIcon } from "./Icons";
import { useState, useEffect } from "react";
import { CustomAppProps } from "../../../Homepage/types";
import * as motion from "motion/react-client";
export const AppButton = ({
  image,
  title,
  onClick,
  enableBorder,
}: CustomAppProps) => {
  const [templateIcon, setTemplateIcon] = useState<string | null>(null);
  const theme = useTheme();
  useEffect(() => {
    if (!image) {
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
      <IconButton size="small" onClick={onClick}>
        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            scale: {
              type: "spring",
              visualDuration: 0.4,
              bounce: 0.5,
            },
          }}
          src={image ?? templateIcon ?? ""}
          alt={title}
          style={{
            pointerEvents: "none",
            height: "60px",
            width: "60px",
            objectFit: "contain",
            padding: enableBorder ? "5px" : "0px",
            borderRadius: enableBorder ? "20px" : "0px",
            backgroundColor: enableBorder ? theme.palette.text.primary : "",
          }}
        />
      </IconButton>
      <Typography
        textAlign={"center"}
        textTransform={"capitalize"}
        fontSize={"12px"}
      >
        {title ?? "template"}
      </Typography>
    </Grid2>
  );
};
