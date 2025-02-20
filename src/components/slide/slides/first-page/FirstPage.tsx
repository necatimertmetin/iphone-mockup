import { Stack, Grid2 } from "@mui/material";
import { useState, useEffect } from "react";
import {
  Weather,
  Player,
  Calendar,
  AppButton,
  importIcons,
} from "../components";
import * as motion from "motion/react-client";
import { CustomApps } from "../../../Homepage/types";

export const FirstPage = ({ customApps }: CustomApps) => {
  const [icons, setIcons] = useState<Record<string, string>>({});

  useEffect(() => {
    importIcons().then(setIcons);
  }, []);

  return (
    <Stack
      direction={"column"}
      alignItems={"stretch"}
      spacing={1}
      paddingX={"16px"}
      component={motion.div}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        scale: { type: "spring", bounce: 0, delay: 1 },
      }}
    >
      <Grid2 flex={"2"} container spacing={2}>
        <Grid2 size={6}>
          <Weather />
        </Grid2>
        <Grid2 size={6}>
          <Player />
        </Grid2>
      </Grid2>
      <Grid2 container flex={"4"} spacing={1}>
        <Calendar />
        {Object.entries(icons).map(([key, value]) => (
          <AppButton key={key} image={value} title={key} />
        ))}
        {customApps?.map(
          (app, index) =>
            app.app && (
              <AppButton
                key={index}
                image={app.image}
                title={app.title}
                enableBorder={app.enableBorder}
                onClick={app.onClick}
              />
            )
        )}
      </Grid2>
    </Stack>
  );
};
