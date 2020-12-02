import React, { ReactNode, useContext, useState } from "react";

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

interface Props {
  children: ReactNode;
}

export const I18nProvider = ({ children }: Props) => {
  const [dict, setDict] = useState(localDicts.de);

  return (
    <I18nContext.Provider value={{ dict, setDict }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  return useContext(I18nContext);
};
