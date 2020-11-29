import React from "react";
const AppContext = React.createContext();
const defaultSettings = {
  postsFilter: "all",
  login:false
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

    const setlogin = () => {
      const newSettings = { ...settings, login: true };
      setSettings(newSettings);
      localStorage.setItem("settings", JSON.stringify(newSettings));
    };

  return <AppContext.Provider value={{ settings, setPostsFilter, setlogin }}>{children}</AppContext.Provider>;
}

export { AppProvider, AppContext };
