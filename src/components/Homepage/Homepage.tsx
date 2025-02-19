import { Box } from "@mui/material";
import { Slide } from "../slide/Slide";
import wallpaper from "/wallpaper.png";
import { FirstPage } from "../slide/slides/first-page/FirstPage";
import { Dock } from "../dock/Dock";

export type HomepageProps = {
  customApp: {
    image?: string;
    title?: string;
    onClick?: () => void;
    enableBorder?: boolean;
  };
};

export const Homepage = ({ customApp }: HomepageProps) => {
  return (
    <>
      <img
        src={wallpaper}
        className="logo react"
        alt="React logo"
        height={"824.46px"}
        style={{
          position: "absolute",
          zIndex: -1,
          borderRadius: "60px",
        }}
      />
      <Box sx={{ paddingX: "12px", paddingTop: "64px" }}>
        <Slide>
          <FirstPage customApp={customApp} />
          <Box />
        </Slide>
        <Dock />
      </Box>
    </>
  );
};
