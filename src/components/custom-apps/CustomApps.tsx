// AppParameters.tsx
import { useEffect, useState } from "react";
import { CustomAppProps } from "../Homepage/types";
import { v4 as uuidv4 } from "uuid"; // Import uuidv4
import customImage from "/apps/custom/custom.png";
import { CustomApp } from "../CustomApp/CustomApp";

export const CustomApps = () => {
  const [appParameters, setAppParameters] = useState<CustomAppProps[]>([
    {
      app: <CustomApp />,
      image: customImage,
      title: "hey",
      enableBorder: true,
    },
  ]);

  useEffect(() => {
    setAppParameters((prevApps) =>
      prevApps.map((app) => ({
        ...app,
        id: uuidv4(), // Assign a unique id
      }))
    );
  }, []);

  return appParameters; // Return the app parameters to be used in other components
};
