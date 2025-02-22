import { Grid2, IconButton, Typography } from "@mui/material";

interface InteractiveIconWrapperProps {
  title?: string;
  InteractiveIcon?: React.ReactNode;
  onClick?: () => void;
}

export const InteractiveIconWrapper: React.FC<InteractiveIconWrapperProps> = ({
  title = "Template",
  InteractiveIcon,
}) => {
  return (
    <Grid2
      size={3}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <IconButton size="small">{InteractiveIcon}</IconButton>

      <Typography
        textAlign={"center"}
        textTransform={"capitalize"}
        fontSize={"12px"}
      >
        {title}
      </Typography>
    </Grid2>
  );
};
