import { Box } from "@mui/material";
import { Slide } from "../slide/Slide";
import wallpaper from "/wallpaper.png";
import { FirstPage } from "../slide/slides/first-page/FirstPage";
import { Dock } from "../dock/Dock";
import { CustomApps } from "./types";
import { SecondPage } from "../slide/slides/second-page/SecondPage";

export const Homepage = ({ customApps }: CustomApps) => {
  const apps = customApps || []; // customApps undefined ise boş dizi kullan

  const [firstApp, ...remainingApps] = apps; // İlk eleman ve geri kalan elemanlar

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
      <Box sx={{ paddingTop: "64px" }}>
        <Slide>
          <FirstPage customApps={firstApp ? [firstApp] : []} />
          <SecondPage customApps={remainingApps} />
        </Slide>
        <Dock />
      </Box>
    </>
  );
};
