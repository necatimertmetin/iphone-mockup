import { Stack, IconButton } from "@mui/material";

import safari from "/apps/light/safari.png";
import music from "/apps/light/music.png";
import phone from "/apps/light/phone.png";
import message from "/apps/light/message.png";

export const Dock = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      spacing={2}
      sx={{
        mx: "10px",
        height: 100,
        backgroundColor: "#ffffff44",
        borderRadius: "45px",

        backdropFilter: "blur(3px)",
        WebkitBackdropFilter: "blur(3px)",
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
  );
};
