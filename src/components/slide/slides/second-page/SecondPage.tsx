import { Stack, Grid2 } from "@mui/material";
import * as motion from "motion/react-client";
import { CustomAppProps } from "../../../Homepage/types";
import { AppRenderer } from "../components/app-renderer/AppRenderer";

interface SecondPageProps {
  customApps: CustomAppProps[]; // Ensure customApps is expected as an array
  setSelectedApp: React.Dispatch<React.SetStateAction<CustomAppProps | null>>; // setSelectedApp type should be set here
}
export const SecondPage = ({ customApps, setSelectedApp }: SecondPageProps) => {
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
        <AppRenderer customApps={customApps} setSelectedApp={setSelectedApp} />
      </Grid2>
    </Stack>
  );
};
