"use client";
import { Category } from "@/lib/types";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface Props {
  children: ReactNode;
}
interface GlobalState {
  categories: Category[];
  favoritePosts: any[]; // You can replace `any[]` with the actual type
  favoriteRecipes: any[];
  setFavoritePosts: React.Dispatch<React.SetStateAction<any[]>>;
  setFavoriteRecipes: React.Dispatch<React.SetStateAction<any[]>>;
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}
const GlobalStateContext = createContext<GlobalState | null>({
  categories: [],
  favoritePosts: [],
  favoriteRecipes: [],
  setFavoritePosts: () => {},
  setFavoriteRecipes: () => {},
  active: "Home",
  setActive: () => {},
});

export const GlobalStateProvider: React.FC<Props> = ({ children }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [favoritePosts, setFavoritePosts] = useState<any[]>([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState<any[]>([]);
  const [active, setActive] = useState("Home");

  // Fetch categories dynamically
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("/api/categories");
      const data = await response.json();
      setCategories(data);
    };
    fetchCategories();
    console.log("fetching");
  }, []);

  return (
    <GlobalStateContext.Provider
      value={{
        categories,
        favoritePosts,
        favoriteRecipes,
        setFavoritePosts,
        setFavoriteRecipes,
        active,
        setActive,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

// Custom hook for easy access
export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);

  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }

  return context;
};
// export const useGlobalState = () => useContext(GlobalStateContext);
//
// Create the Menu context
// const MenuContext = createContext<{
//   active: string;
//   setActiveMenuItem: (value: string) => void;
// }>({
//   active: "Home",
//   setActiveMenuItem: (value: string) => {
//     throw new Error("setActiveMenuItem must be used within a MenuProvider");
//   }, // Default function
// });

// // Create a provider component
// export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
//   const [active, setActive] = useState("Home");

//   const setActiveMenuItem = (value: string) => {
//     setActive(value);
//   };

//   return (
//     <MenuContext.Provider value={{ active, setActiveMenuItem }}>
//       {children}
//     </MenuContext.Provider>
//   );
// };

// Custom hook for easier usage
// export const useMenuItems = () => useContext(MenuContext);
