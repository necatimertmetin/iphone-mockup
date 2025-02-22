import { Box } from "@mui/material";
import { Slide } from "../slide/Slide";
import wallpaper from "/wallpaper.png";
import { Page } from "../slide/slides/page/Page";
import { Dock } from "../dock/Dock";
import { CustomAppProps } from "./types";

interface HomepageProps {
  customApps: CustomAppProps[]; // customApps should be an array of CustomAppProps
  setSelectedApp: React.Dispatch<React.SetStateAction<CustomAppProps | null>>; // setSelectedApp should be passed
}

export const Homepage = ({
  customApps = [],
  setSelectedApp,
}: HomepageProps) => {
  const chunks = [];

  for (let i = 0; i < customApps.length; i += 16) {
    chunks.push(customApps.slice(i, i + 16));
  }

  console.log(chunks);
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
          {chunks?.map((chunk, index) => (
            <Page
              key={index}
              customApps={chunk}
              setSelectedApp={setSelectedApp}
              index={index}
            />
          ))}
        </Slide>
        <Dock />
      </Box>
    </>
  );
};
