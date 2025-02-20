import { Stack, Grid2 } from "@mui/material";
import { AppButton } from "../components";
import * as motion from "motion/react-client";
import { CustomApps } from "../../../Homepage/types";

export const SecondPage = ({ customApps }: CustomApps) => {
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
        scale: { type: "spring", bounce: 0 },
      }}
    >
      <Grid2 container spacing={1}>
        {customApps?.map(
          (app, index) =>
            app.app && (
              <AppButton
                key={index}
                image={app.image}
                title={app.title}
                enableBorder={app.enableBorder}
              />
            )
        )}
      </Grid2>
    </Stack>
  );
};
