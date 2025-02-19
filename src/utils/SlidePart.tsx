import { ReactNode } from "react";
import { SwiperSlide } from "swiper/react";

type Props = {
  children: ReactNode;
};

export const SlidePart = ({ children }: Props) => {
  return (
    <SwiperSlide
      style={{
        width: "392px",
        marginLeft: "4px",
        height: "760.46px",
        backgroundColor: "#00000050",
      }}
    >
      {children}
    </SwiperSlide>
  );
};
