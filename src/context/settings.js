import React from "react";
const AppContext = React.createContext();
const defaultSettings = {
  postsFilter: "all",
  isLogged: false,
  accessToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InRpX2F5aGFtIiwibmFtZWlkIjoiNTY2MjI0NmYtMDVkMS00MmZjLWE5NzktZWVkMjUwNjRlMWNkIiwicm9sZSI6IlRlbmFudEluZGl2aWR1YWwiLCJuYmYiOjE2MDc3NDk0NzAsImV4cCI6MTYwODAwODY3MCwiaWF0IjoxNjA3NzQ5NDcwfQ.Kgz0uVC8aBkD-ZlgI1VOEO8Ajmo7Nfk0-ImHF7oQQ4U",
};

function getsettingsFromLocalStorage() {
  return localStorage.getItem("settings") ? JSON.parse(localStorage.getItem("settings")) : defaultSettings;
}

function AppProvider({ children }) {
  const [settings, setSettings] = React.useState(getsettingsFromLocalStorage());

  const setPostsFilter = (filter) => {
    const newSettings = { ...settings, postsFilter: filter };
    setSettings(newSettings);
    localStorage.setItem("settings", JSON.stringify(newSettings));
  };

  const updateAppContext = (newSetting) => {
    const newSettings = { ...settings, ...newSetting };
    console.log("[in settings] newSettings");
    setSettings(newSettings);
    localStorage.setItem("settings", JSON.stringify(newSettings));
  };

  return <AppContext.Provider value={{ settings, setSettings, updateAppContext, setPostsFilter }}>{children}</AppContext.Provider>;
}

export { AppProvider, AppContext };
