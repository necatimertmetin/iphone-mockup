import { Stack, Typography, useTheme } from "@mui/material";

export const Calendar = () => {
  const theme = useTheme();

  const today = new Date();
  const dayOfWeek = today
    .toLocaleString("en-US", { weekday: "short" })
    .toUpperCase();
  const dayOfMonth = today.getDate();

  return (
    <Stack
      height={"60px"}
      direction={"column"}
      alignItems={"center"}
      sx={{
        aspectRatio: 1,
        backgroundColor: theme.palette.text.primary,
        borderRadius: "12px",
        pointerEvents: "none",
      }}
    >
      <Typography variant="body2" color="error" fontWeight={900}>
        {dayOfWeek}
      </Typography>
      <Typography variant="h4" color={"#000"} lineHeight={0.9}>
        {dayOfMonth}
      </Typography>
    </Stack>
  );
};
