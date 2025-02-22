// AppParameters.tsx
import { useEffect, useState } from "react";
import { CustomAppProps } from "../Homepage/types";
import { v4 as uuidv4 } from "uuid"; // Import uuidv4
import customImage from "/apps/custom/custom.png";
import { CustomApp } from "../CustomApp/CustomApp";
import { defaultAppIcons } from "../slide/slides/components/Icons";
import { Calendar } from "../slide/slides/components";

export const CustomApps = () => {
  const [appParameters, setAppParameters] = useState<CustomAppProps[]>([
    {
      image: defaultAppIcons.facetime,
      title: "FaceTime",
    },
    {
      image: defaultAppIcons.appStore,
      title: "App Store",
    },
    {
      image: defaultAppIcons.calculator,
      title: "Calculator",
    },
    {
      image: defaultAppIcons.camera,
      title: "Camera",
    },
    {
      image: defaultAppIcons.health,
      title: "Health",
    },
    {
      image: defaultAppIcons.mail,
      title: "Mail",
    },
    {
      image: defaultAppIcons.maps,
      title: "Maps",
    },
    {
      image: defaultAppIcons.news,
      title: "News",
    },
    {
      image: defaultAppIcons.notes,
      title: "Notes",
    },
    {
      image: defaultAppIcons.photos,
      title: "Photos",
    },
    {
      image: defaultAppIcons.podcasts,
      title: "Podcasts",
    },
    {
      image: defaultAppIcons.reminders,
      title: "Reminders",
    },
    {
      image: defaultAppIcons.settings,
      title: "Settings",
    },
    {
      image: defaultAppIcons.tv,
      title: "TV",
    },
    {
      InteractiveIcon: <Calendar />,
    },
    {
      app: <CustomApp />,
      image: customImage,
      title: "hey",
      enableBorder: true,
    },
    {
      app: <CustomApp />,
      image: customImage,
      title: "hey",
      enableBorder: true,
    },
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
