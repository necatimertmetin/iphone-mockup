import React from "react";
import { Box, Typography } from "@mui/material";

interface SongDetailsProps {
  title: string;
  artist: string;
}

const SongDetails: React.FC<SongDetailsProps> = ({ title, artist }) => {
  return (
    <Box>
      <Typography variant="h4" textAlign={"center"} fontWeight={600}>
        {title}
      </Typography>
      <Typography
        variant="h6"
        textAlign={"center"}
        fontWeight={500}
        sx={{ color: "gray" }}
      >
        {artist}
      </Typography>
    </Box>
  );
};

export default SongDetails;
