import { IconButton, LinearProgress, Stack, Typography } from "@mui/material";
import Eilish from "/apps/music/What was i made of - Billie Eilish.png";
import { LuAudioLines } from "react-icons/lu";
import {
  PauseCircleRounded,
  SkipNextRounded,
  SkipPreviousRounded,
} from "@mui/icons-material";
export const Player = () => {
  const progress = 50;
  return (
    <>
      <Stack
        direction={"column"}
        justifyContent={"space-between"}
        sx={{
          borderRadius: "24px",
          aspectRatio: "1",
          backgroundImage: `url(${Eilish})`,
          backgroundSize: "cover", // Ensures the image covers the container
          backgroundPosition: "center", // Centers the image
          padding: "12px",
        }}
      >
        <LuAudioLines />
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{ width: "100%", overflow: "hidden" }}
        >
          <Typography variant="body2">What Was i Made Of</Typography>

          <IconButton size="small">
            <PauseCircleRounded fontSize="large" />
          </IconButton>
        </Stack>
        <Stack direction={"row"} alignItems={"center"}>
          <IconButton size="small">
            <SkipPreviousRounded fontSize="small" />
          </IconButton>

          <LinearProgress
            sx={{ flex: 1, height: "2px" }}
            variant="determinate"
            value={progress}
            color={"inherit"}
          />
          <IconButton size="small">
            <SkipNextRounded fontSize="small" />
          </IconButton>
        </Stack>
      </Stack>
      <Typography variant="body2" fontWeight={300} textAlign={"center"}>
        Player
      </Typography>
    </>
  );
};
