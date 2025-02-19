import { IconButton, Grid2, Typography } from "@mui/material";

interface AppButtonProps {
  image: string;
  text: string;
}

const AppButton: React.FC<AppButtonProps> = ({ image, text }) => {
  return (
    <Grid2
      size={3}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <IconButton size="small">
        <img src={image} alt={text} />
      </IconButton>
      <Typography
        textAlign={"center"}
        textTransform={"capitalize"}
        fontSize={"12px"}
      >
        {text}
      </Typography>
    </Grid2>
  );
};

export default AppButton;
