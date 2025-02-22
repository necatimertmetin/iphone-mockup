import { Stack, Grid2 } from "@mui/material";
import { Weather, Player, Calendar, AppButton } from "../components";
import * as motion from "motion/react-client";
import { CustomAppProps } from "../../../Homepage/types";

interface PageProps {
  customApps: CustomAppProps[]; // Ensure customApps is expected as an array
  setSelectedApp: React.Dispatch<React.SetStateAction<CustomAppProps | null>>; // setSelectedApp type should be set here
  index?: number;
}

export const Page = ({ customApps, setSelectedApp, index }: PageProps) => {
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
      {index === 0 && (
        <Grid2 flex={"2"} container spacing={2}>
          <Grid2 size={6}>
            <Weather />
          </Grid2>
          <Grid2 size={6}>
            <Player />
          </Grid2>
        </Grid2>
      )}

      <Grid2 container flex={"4"} spacing={1}>
        {index === 100 && <Calendar />}
        {customApps?.map((app, index) => (
          <AppButton
            key={index}
            image={app.image}
            InteractiveIcon={app.InteractiveIcon}
            title={app.title}
            enableBorder={app.enableBorder}
            onClick={() => app.app && setSelectedApp(app)}
          />
        ))}
      </Grid2>
    </Stack>
  );
};
