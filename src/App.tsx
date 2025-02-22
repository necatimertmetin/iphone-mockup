import Notch from "/notch.svg";
import Notchless from "/notchless.svg";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "./theme";
import { Homepage } from "./components/Homepage/Homepage";
import customImage from "/apps/custom/custom.png";
import { useState } from "react";
import { CustomApp } from "./components/CustomApp/CustomApp";
import { Appbar } from "./components/Appbar";
import { CustomAppProps } from "./components/Homepage/types";
import { BackToHomeButton } from "./utils/BackToHomeButton";
function App() {
  //home dock icin soldan sagdan ve asagidan paddingler 12px
  //applar icin soldan sagdan padding 31px
  //appler arasi bosluk 30px
  //notification yukseklik 50px padding 40px
  //app yuksekligi 62px
  //dock appleri arasi mesafe 29px
  //search genisligi 80px yuksekligi 32px

  const theme = darkTheme;
  const [selectedApp, setSelectedApp] = useState<CustomAppProps | null>(null);

  const AppParameters: CustomAppProps[] = [
    {
      app: <CustomApp />,
      image: customImage,
      title: "hey",
      onClick: () =>
        setSelectedApp({
          app: <CustomApp />,
          image: customImage,
          title: "hey",
          onClick: () => setSelectedApp(null), // Bu butona tıklanınca tekrar kapanabilir
          enableBorder: true,
        }),
      enableBorder: true,
    },
    {
      app: <CustomApp />,
      image: customImage,
      title: "hey",
      onClick: () =>
        setSelectedApp({
          app: <CustomApp />,
          image: customImage,
          title: "hey",
          onClick: () => setSelectedApp(null), // Bu butona tıklanınca tekrar kapanabilir
          enableBorder: true,
        }),
      enableBorder: true,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
        <img
          src={Notch}
          className="logo react"
          alt="React logo"
          width={"400px"}
          height={"824.46px"}
          style={{ position: "absolute", zIndex: 5, pointerEvents: "none" }}
        />
        <Box
          sx={{
            width: "398px",
            paddingLeft: "6px",
            borderRadius: "60px",
            overflow: "hidden",
          }}
        >
          <Appbar />

          {selectedApp ? (
            <Box sx={{ position: "relative" }}>
              {selectedApp.app}

              <BackToHomeButton onClick={() => setSelectedApp(null)} />
            </Box>
          ) : (
            <Homepage customApps={AppParameters} />
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
