import { Box } from "@mui/material";
import { Slide } from "../slide/Slide";
import wallpaper from "/wallpaper.png";
import { FirstPage } from "../slide/slides/first-page/FirstPage";
import { Dock } from "../dock/Dock";
import { CustomAppProps } from "./types";
import { SecondPage } from "../slide/slides/second-page/SecondPage";

interface HomepageProps {
  customApps: CustomAppProps[]; // customApps should be an array of CustomAppProps
  setSelectedApp: React.Dispatch<React.SetStateAction<CustomAppProps | null>>; // setSelectedApp should be passed
}

export const Homepage = ({ customApps, setSelectedApp }: HomepageProps) => {
  const apps = customApps || []; // If customApps is undefined, fallback to empty array

  const [firstApp, ...remainingApps] = apps; // Destructure the first app and the remaining apps

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
          {apps.length > 1 ? (
            <>
              <FirstPage
                customApps={firstApp ? [firstApp] : []} // Passing the first app to FirstPage
                setSelectedApp={setSelectedApp} // Passing setSelectedApp to FirstPage
              />
              <SecondPage
                customApps={remainingApps}
                setSelectedApp={setSelectedApp}
              />
            </>
          ) : (
            <FirstPage
              customApps={firstApp ? [firstApp] : []} // Single page if only one app
              setSelectedApp={setSelectedApp} // Passing setSelectedApp to FirstPage
            />
          )}
        </Slide>
        <Dock />
      </Box>
    </>
  );
};
