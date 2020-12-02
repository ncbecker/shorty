import React from "react";

export const I18nContext = React.createContext(null);

export const localDicts = {
  de: {
    target: "Ziel",
    views: "Aufrufe",
    created: "Erstellt am",
  },
  en: {
    target: "Target",
    views: "Views",
    created: "Created At",
  },
};
