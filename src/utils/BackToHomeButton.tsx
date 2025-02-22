import { Button } from "@mui/material";

export const BackToHomeButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button
      sx={{
        position: "absolute",
        bottom: "0",
        left: "50%",
        transform: "translateX(-50%)",
        padding: "5px",
        width: "25%",
        boxShadow: "none",
        borderBottom: `1px solid #F2F2F7`,
        borderRadius: 0,
        backgroundColor: "transparent",
      }}
      variant="contained"
      onClick={onClick}
    />
  );
};
