const appIcons: Record<string, string> = {
  facetime: "/apps/light/facetime.png",
  appStore: "/apps/light/app store.png",
  calculator: "/apps/light/calculator.png",
  camera: "/apps/light/camera.png",
  health: "/apps/light/health.png",
  mail: "/apps/light/mail.png",
  maps: "/apps/light/maps.png",
  news: "/apps/light/news.png",
  notes: "/apps/light/notes.png",
  photos: "/apps/light/photos.png",
  podcasts: "/apps/light/podcasts.png",
  reminders: "/apps/light/reminders.png",
  settings: "/apps/light/settings.png",
  tv: "/apps/light/TV.png",
  template: "/apps/light/template.png",
  //wallet: "/apps/light/wallet.png",
};

export const importIcons = async () => {
  const imports = await Promise.all(
    Object.entries(appIcons)
      .filter(([key]) => key !== "template") // "template" ikonunu hariç tut
      .map(async ([key, path]) => {
        const module = await import(/* @vite-ignore */ path);
        return { [key]: module.default };
      })
  );

  return Object.assign({}, ...imports);
};

export const importTemplateIcon = async () => {
  const path = "/apps/light/template.png"; // Template ikonunun yolu
  const module = await import(/* @vite-ignore */ path);
  return { template: module.default };
};
