import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "/node_modules/swiper/swiper.css";
import "/node_modules/swiper/modules/pagination.css";
import { useState, useRef } from "react";
import { Stack, Typography } from "@mui/material";
import { IoIosSearch } from "react-icons/io";
type SlideProps = {
  children: React.ReactNode | React.ReactNode[];
};

export const Slide = ({ children }: SlideProps) => {
  const [hasMoved, setHasMoved] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null); // Updated type

  const pagination = {
    dynamicBullets: true,
    renderBullet: function (_index: number, className: string) {
      return `
        <span class="${className}" style="background-color: #ffffffaa; border-radius: 50%; box-shadow: 0px 0px 2px #fff; margin-bottom: 5px;"></span>
      `;
    },
    clickable: true,
  };

  const handleSlideChange = () => {
    setHasMoved(true);

    // Clear the previous timeout if any
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set a new timeout to hide pagination after 2 seconds
    timeoutRef.current = setTimeout(() => {
      setHasMoved(false); // Hide pagination after 2 seconds
    }, 2000);
  };

  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <div style={{ position: "relative" }}>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination={hasMoved ? pagination : false} // Show pagination only after slide movement
        modules={[Pagination]}
        onSlideChange={handleSlideChange} // Trigger when the slide changes
      >
        {childrenArray.map((child, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: "376px",
              height: "638.46px",
            }}
          >
            {child}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Show this element when pagination is hidden */}
      {!hasMoved && (
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          spacing={"4px"}
          sx={{
            position: "absolute",
            bottom: "1%",
            left: "50%",
            transform: "translate(-50%, -51%)",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            borderRadius: "45px",
            padding: " 5px 14px",
            backdropFilter: "blur(3px)",
            WebkitBackdropFilter: "blur(3px)",
          }}
        >
          <IoIosSearch color="#F2F2F7" />
          <Typography fontSize={"12px"} color="#f2f2f7">
            Search
          </Typography>
        </Stack>
      )}
    </div>
  );
};
