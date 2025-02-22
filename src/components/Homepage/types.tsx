import { JSX } from "react";

export type CustomAppProps = {
  id?: string;
  app?: JSX.Element;
  image?: string;
  title?: string;
  enableBorder?: boolean;
  InteractiveIcon?: JSX.Element;
};

export type CustomApps = {
  customApps?: CustomAppProps[];
};
