import React from "react";
const AppContext = React.createContext();
const defaultSettings = {
  postsFilter: "all",
};

function getsettingsFromLocalStorage() {
  return localStorage.getItem("settings") ? JSON.parse(localStorage.getItem("settings")) : defaultSettings;
}

function AppProvider({ children }) {
  const [settings, setSettings] = React.useState(getsettingsFromLocalStorage());

  const setPostsFilter = (filter) => {
    console.log("[settingsProvider setFilteredBy]", filter);
    const newSettings = { ...settings, postsFilter: filter };
    setSettings(newSettings);
    localStorage.setItem("settings", JSON.stringify(newSettings));
  };

  return <AppContext.Provider value={{ settings, setPostsFilter }}>{children}</AppContext.Provider>;
}

export { AppProvider, AppContext };
