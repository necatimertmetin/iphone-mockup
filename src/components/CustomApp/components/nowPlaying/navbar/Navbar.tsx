import { Stack, Typography } from "@mui/material";
import { IoIosInformation, IoIosMenu } from "react-icons/io";
import { MediumButton } from "../../Button";

export const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      paddingX={"24px"}
    >
      <MediumButton>
        <IoIosInformation fontSize={34} />
      </MediumButton>
      <Typography textAlign={"center"} sx={{ flex: "1" }} fontWeight={600}>
        Playing Now
      </Typography>
      <MediumButton>
        <IoIosMenu fontSize={24} />
      </MediumButton>
    </Stack>
  );
};
