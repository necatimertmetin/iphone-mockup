import { Stack, Grid2 } from "@mui/material";
import { Weather } from "./components/Weather";
import { Player } from "./components/Player";
import facetime from "/apps/light/facetime.png";
import appStore from "/apps/light/app store.png";
import calculator from "/apps/light/calculator.png";
import camera from "/apps/light/camera.png";
import health from "/apps/light/health.png";
import mail from "/apps/light/mail.png";
import maps from "/apps/light/maps.png";
import news from "/apps/light/news.png";
import notes from "/apps/light/notes.png";
import photos from "/apps/light/photos.png";
import podcasts from "/apps/light/podcasts.png";
import reminders from "/apps/light/reminders.png";
import settings from "/apps/light/settings.png";
import tv from "/apps/light/TV.png";
import wallet from "/apps/light/wallet.png";
import { Calendar } from "./components/Calendar";
import AppButton from "./components/AppButton";

export const FirstPage = () => {
  return (
    <Stack
      direction={"column"}
      alignItems={"stretch"}
      spacing={1}
      paddingX={"16px"}
    >
      <Grid2 flex={"2"} container spacing={"24px"}>
        <Grid2 size={6}>
          <Weather />
        </Grid2>
        <Grid2 size={6}>
          <Player />
        </Grid2>
      </Grid2>
      <Grid2 container flex={"4"} spacing={1}>
        <AppButton image={facetime} text="FaceTime" />
        <Calendar />
        <AppButton image={photos} text="photos" />
        <AppButton image={camera} text="camera" />
        <AppButton image={mail} text="mail" />
        <AppButton image={notes} text="notes" />
        <AppButton image={reminders} text="reminders" />
        <AppButton image={calculator} text="calculator" />
        <AppButton image={news} text="news" />
        <AppButton image={tv} text="TV" />
        <AppButton image={podcasts} text="podcasts" />
        <AppButton image={appStore} text="App Store" />
        <AppButton image={maps} text="maps" />
        <AppButton image={health} text="health" />
        <AppButton image={wallet} text="wallet" />
        <AppButton image={settings} text="settings" />
      </Grid2>
    </Stack>
  );
};
