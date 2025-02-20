import { JSX } from "react";

export type CustomAppProps = {
  app?: JSX.Element;
  image?: string;
  title?: string;
  onClick?: () => void;
  enableBorder?: boolean;
};

export type CustomApps = {
  customApps?: CustomAppProps[];
};
