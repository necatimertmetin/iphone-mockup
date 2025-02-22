import { Box, Grid2, LinearProgress, Stack, Typography } from "@mui/material";
import * as motion from "motion/react-client";
import { Navbar } from "./components/nowPlaying/navbar/Navbar";
import { IoMdPause, IoMdRepeat, IoMdRewind, IoMdShuffle } from "react-icons/io";
import { LargeButton, MediumButton } from "./components/Button";
import nowPlayingImg from "/custom-app/playlist/powerwolf/Powerwolf - Army of the Night.jpg";
import { IoPlayForwardSharp } from "react-icons/io5";
import SongDetails from "./components/nowPlaying/song-details/SongDetails";
export const CustomApp = () => {
  return (
    <Stack
      height={"815px"}
      sx={{
        background: "linear-gradient(180deg, #35383e 0%, #181a1c 100%)",
        borderRadius: "52px",
        paddingTop: "64px",
        paddingX: "12px",
      }}
    >
      <Stack
        direction={"column"}
        alignItems={"stretch"}
        justifyContent={"space-between"}
        height={"100%"}
        component={motion.div}
        initial={{ opacity: 0, y: 100 }} // Başlangıçta şeffaf ve aşağıda
        animate={{ opacity: 1, y: 0 }} // Animasyonla görünür ve yukarıda
        transition={{
          opacity: { duration: 0.5 }, // Yavaşça görünür
          y: { type: "spring", stiffness: 100, damping: 25 }, // Yay animasyonu ile yukarıya kayma
        }}
      >
        <Navbar />
        <Stack width={"100%"} alignItems={"center"} justifyContent={"center"}>
          <Box sx={{ height: "280px", width: "280px", position: "relative" }}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translate(-40%,-50%)",
              }}
            >
              <MediumButton>
                <IoMdShuffle fontSize={20} />
              </MediumButton>
            </Box>
            <img
              src={nowPlayingImg}
              style={{
                borderRadius: "100%",
                height: "100%",
                width: "100%",
                border: "5px solid #1a1c1e",
                boxShadow: "-5px -5px 10px #ffffff33, 5px 5px 8px #000000dd",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                right: "0",
                transform: "translate(50%,-50%)",
              }}
            >
              <MediumButton>
                <IoMdRepeat fontSize={20} />
              </MediumButton>
            </Box>
          </Box>
        </Stack>
        <SongDetails title="Army of the Night" artist="PowerWolf" />
        <Grid2 container sx={{ paddingX: 5 }} spacing={2}>
          <Grid2 size={6}>
            <Typography variant="body2">1:17</Typography>
          </Grid2>
          <Grid2 size={6}>
            <Typography variant="body2" textAlign={"end"}>
              3:31
            </Typography>
          </Grid2>
          <Grid2 size={12}>
            <LinearProgress
              variant="determinate"
              value={50}
              color={"secondary"}
              sx={{ borderRadius: "100px" }}
            />
          </Grid2>
        </Grid2>

        <Grid2 container sx={{ paddingX: 2, paddingBottom: 5 }}>
          <Grid2
            size={4}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <LargeButton>
              <IoMdRewind fontSize={24} />
            </LargeButton>
          </Grid2>
          <Grid2
            size={4}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <LargeButton>
              <IoMdPause fontSize={24} />
            </LargeButton>
          </Grid2>
          <Grid2
            size={4}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <LargeButton>
              <IoPlayForwardSharp fontSize={24} />
            </LargeButton>
          </Grid2>
        </Grid2>
      </Stack>
    </Stack>
  );
};
