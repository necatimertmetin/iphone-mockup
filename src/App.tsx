import Notch from "/notch.svg";
import Notchless from "/notchless.svg";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import wallpaper from "/wallpaper.png";
import { Appbar } from "./components/Appbar";
import { Slide } from "./components/slide/Slide";
import { darkTheme } from "./theme";
import { Dock } from "./components/dock/Dock";
import { FirstPage } from "./components/slide/slides/first-page/FirstPage";
function App() {
  //home dock icin soldan sagdan ve asagidan paddingler 12px
  //applar icin soldan sagdan padding 31px
  //appler arasi bosluk 30px
  //notification yukseklik 50px padding 40px
  //app yuksekligi 62px
  //dock appleri arasi mesafe 29px
  //search genisligi 80px yuksekligi 32px

  const theme = darkTheme;

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
          src={wallpaper}
          className="logo react"
          alt="React logo"
          width={"392px"}
          height={"824.46px"}
          style={{
            position: "absolute",
            zIndex: -1,
            paddingLeft: "4px",
            borderRadius: "60px",
          }}
        />
        <img
          src={Notch}
          className="logo react"
          alt="React logo"
          width={"400px"}
          height={"824.46px"}
          style={{ position: "absolute", zIndex: 5, pointerEvents: "none" }}
        />
        <Box sx={{ paddingX: "12px" }}>
          <Appbar />
          <Slide>
            <FirstPage />
            <div>Slide 2 İçeriği</div>
            <div>Slide 3 İçeriği</div>
            <div>Slide 4 İçeriği</div>
          </Slide>
          <Dock />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
