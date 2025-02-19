import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {
  IoIosWifi,
  IoIosBatteryFull,
  IoIosBatteryCharging,
  IoIosBatteryDead,
} from "react-icons/io";
import { IoCellular } from "react-icons/io5";

declare global {
  interface BatteryManager {
    charging: boolean;
    level: number;
    chargingTime: number;
    dischargingTime: number;
    addEventListener: (type: string, listener: () => void) => void;
    removeEventListener: (type: string, listener: () => void) => void;
  }

  interface Navigator {
    getBattery?: () => Promise<BatteryManager>;
  }
}

declare global {
  interface Navigator {
    getBattery?: () => Promise<BatteryManager>;
  }
}

export const Appbar = () => {
  const getCurrentTime = () => {
    const d = new Date();
    return `${d.getHours()}:${String(d.getMinutes()).padStart(2, "0")}`;
  };

  const [time, setTime] = useState(getCurrentTime());
  const [batteryLevel, setBatteryLevel] = useState<number | null>(null);
  const [charging, setCharging] = useState<boolean | null>(null);

  useEffect(() => {
    // Zamanı güncelleme
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 60000); // 1 dakika

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Battery API desteği kontrolü
    if (navigator.getBattery) {
      navigator
        .getBattery()
        .then((battery) => {
          if (battery) {
            // Başlangıç bilgileri
            setBatteryLevel(battery.level * 100);
            setCharging(battery.charging);

            // Event Listener ekleme
            const updateBatteryInfo = () =>
              setBatteryLevel(battery.level * 100);
            const updateChargingInfo = () => setCharging(battery.charging);

            battery.addEventListener("levelchange", updateBatteryInfo);
            battery.addEventListener("chargingchange", updateChargingInfo);

            // Cleanup fonksiyonu
            return () => {
              battery.removeEventListener("levelchange", updateBatteryInfo);
              battery.removeEventListener("chargingchange", updateChargingInfo);
            };
          }
        })
        .catch((error) => {
          console.error("Battery API error: ", error);
        });
    } else {
      console.warn("Battery API is not supported on this browser.");
    }
  }, []);

  const getBatteryIcon = () => {
    if (charging) return <IoIosBatteryCharging fontSize="20px" />;
    if (batteryLevel !== null) {
      if (batteryLevel >= 50) return <IoIosBatteryFull fontSize="20px" />;
      return <IoIosBatteryDead fontSize="20px" />;
    }
    return null;
  };

  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      paddingY={"22px"}
      paddingX={"34px"}
      sx={{ position: "absolute", width: "100%" }}
    >
      <Stack direction={"row"} alignItems={"center"} gap={"6px"}>
        <Typography variant="body2" sx={{ fontWeight: "600" }}>
          {time}
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: "600" }}>
          BIMcell
        </Typography>
      </Stack>
      <Stack direction={"row"} alignItems={"center"} gap={"6px"}>
        <IoCellular fontSize={"20px"} />
        <IoIosWifi fontSize={"20px"} />
        {getBatteryIcon()}
      </Stack>
    </Stack>
  );
};
