import { Stack, IconButton, Box } from "@mui/material";
import safari from "/apps/light/safari.png";
import music from "/apps/light/music.png";
import phone from "/apps/light/phone.png";
import message from "/apps/light/message.png";
import * as motion from "motion/react-client";

export const Dock = () => {
  return (
    <Box
      sx={{
        mx: "10px",
        height: 100,
        backgroundColor: "#ffffff44",
        borderRadius: "45px",
        backdropFilter: "blur(3px)",
        WebkitBackdropFilter: "blur(3px)",
      }}
    >
      <Stack
        height={"100%"}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={2}
        component={motion.div}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          scale: { type: "spring", bounce: 0 },
        }}
      >
        <IconButton size="small">
          <img src={phone} alt="phone" />
        </IconButton>
        <IconButton size="small">
          <img src={safari} alt="safari" />
        </IconButton>
        <IconButton size="small">
          <img src={message} alt="message" />
        </IconButton>
        <IconButton size="small">
          <img src={music} alt="music" />
        </IconButton>
      </Stack>
    </Box>
  );
};
