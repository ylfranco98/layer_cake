import { LucideIcon } from "lucide-react";
import * as LucideIcons from "lucide-react";

export type MenuItem = {
  name: "Home" | "Recipes" | "Tips" | "Blogs"; // Only valid keys
  path: string;
};

export type CollapsibleMenuType = {
  title: string | undefined;
  href: string | undefined;
  description: string | undefined;
  icon: React.ComponentType<any> | undefined;
};
