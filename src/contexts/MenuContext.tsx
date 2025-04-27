"use client";
import { createContext, useContext, useState } from "react";

// Create the Menu context
const MenuContext = createContext<{
  active: string;
  setActiveMenuItem: (value: string) => void;
}>({
  active: "Home",
  setActiveMenuItem: (value: string) => {
    throw new Error("setActiveMenuItem must be used within a MenuProvider");
  }, // Default function
});

// Create a provider component
export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [active, setActive] = useState("Home");

  const setActiveMenuItem = (value: string) => {
    setActive(value);
  };

  return (
    <MenuContext.Provider value={{ active, setActiveMenuItem }}>
      {children}
    </MenuContext.Provider>
  );
};

// Custom hook for easier usage
export const useMenuItems = () => useContext(MenuContext);
