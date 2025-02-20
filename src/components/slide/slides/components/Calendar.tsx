import { Grid2, IconButton, Stack, Typography, useTheme } from "@mui/material";

export const Calendar = () => {
  const theme = useTheme();

  // Bugünün tarihi
  const today = new Date();
  const dayOfWeek = today
    .toLocaleString("en-US", { weekday: "short" })
    .toUpperCase(); // Örn: MON
  const dayOfMonth = today.getDate(); // Gün numarası, örn: 9

  return (
    <Grid2
      size={3}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <IconButton size="small">
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
      </IconButton>

      <Typography textAlign={"center"} variant="body2">
        Calendar
      </Typography>
    </Grid2>
  );
};
