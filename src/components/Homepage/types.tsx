import { JSX } from "react";

export type CustomAppProps = {
  id?: string;
  app?: JSX.Element;
  image?: string;
  title?: string;
  enableBorder?: boolean;
};

export type CustomApps = {
  customApps?: CustomAppProps[];
};
