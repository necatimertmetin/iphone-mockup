import { Stack, Box, Typography } from "@mui/material";

import { IoIosSunny } from "react-icons/io";

export const Weather = () => {
  return (
    <>
      <Stack
        direction={"column"}
        justifyContent={"space-between"}
        sx={{
          borderRadius: "24px",
          aspectRatio: "1",
          background:
            "linear-gradient(0deg, rgba(74,133,193,1) 0%, rgba(14,71,142,1) 100%)",
          padding: "12px",
        }}
      >
        <Box>
          <Typography variant="body1" color="#F2F2F7">
            Bursa
          </Typography>
          <Typography variant="h4" fontWeight={"200"} color="#F2F2F7">
            32°
          </Typography>
        </Box>
        <Box sx={{ lineHeight: 1 }}>
          <IoIosSunny
            fontSize={"20px"}
            color="#fed703"
            style={{
              animation: "spin 30s linear infinite",
            }}
          />
          <Typography variant="body2" color="#F2F2F7" lineHeight={2}>
            Sunny
          </Typography>
          <Typography variant="body2" color="#F2F2F7" lineHeight={1}>
            H:72° L:55°
          </Typography>
        </Box>
      </Stack>
      <Typography variant="body2" fontWeight={300} textAlign={"center"}>
        Weather
      </Typography>
    </>
  );
};
