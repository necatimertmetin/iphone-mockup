import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "./theme";
import { Homepage } from "./components/Homepage/Homepage";
import { useState } from "react";
import { CustomAppProps } from "./components/Homepage/types";
import { BackToHomeButton } from "./utils/BackToHomeButton";
import { Iphone } from "./utils/Iphone";
import { Screen } from "./utils/Screen";
import { Apps } from "./components/apps/Apps";
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
  const appParameters = Apps();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Iphone>
        <Screen>
          {selectedApp ? (
            <>
              {selectedApp.app}
              <BackToHomeButton onClick={() => setSelectedApp(null)} />
            </>
          ) : (
            <Homepage
              customApps={appParameters}
              setSelectedApp={setSelectedApp}
            />
          )}
        </Screen>
      </Iphone>
    </ThemeProvider>
  );
}

export default App;
