import { CustomAppProps } from "../../../../Homepage/types";
import { AppButton } from "../AppButton";

interface AppRendererProps {
  customApps?: CustomAppProps[];
  setSelectedApp: React.Dispatch<React.SetStateAction<CustomAppProps | null>>;
}

export const AppRenderer = ({
  customApps,
  setSelectedApp,
}: AppRendererProps) => {
  return (
    <>
      {customApps?.map(
        (app, index) =>
          app.app && (
            <AppButton
              key={index}
              image={app.image}
              title={app.title}
              enableBorder={app.enableBorder}
              onClick={() => setSelectedApp(app)} // safely calling setSelectedApp
            />
          )
      )}
    </>
  );
};
