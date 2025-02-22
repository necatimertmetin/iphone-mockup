import notch from "/notch.svg";

export const Notch = () => {
  return (
    <img
      src={notch}
      className="logo react"
      alt="React logo"
      width={"400px"}
      height={"824.46px"}
      style={{ position: "absolute", zIndex: 5, pointerEvents: "none" }}
    />
  );
};
