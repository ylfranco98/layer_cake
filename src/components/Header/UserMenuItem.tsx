import React from "react";
import ContentNavigationMenuItem from "./ContentNavigationMenuItem";

import {
  UserRound,
  UserRoundCog,
  Heart,
  CircleUserRound,
  Cog,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSidebar } from "../ui/sidebar";
import CollapsibleMenuItem from "./CollapsibleMenuItem";
import { CollapsibleMenuType } from "@/lib/types";

const components: CollapsibleMenuType[] = [
  {
    title: "View Profile",
    href: "/account",
    description: "My recipes, tips and blog articles.",
    icon: CircleUserRound,
  },
  {
    title: "Favorites",
    href: "/account/favorites",
    description: "Personal Account Settings.",
    icon: Heart,
  },
  {
    title: "Preferences",
    href: "/account/favorites",
    description: "Favorites recipes, tips and blog articles.",
    icon: Cog,
  },
  {
    title: "Log Out",
    href: "/",
    description: "Log Out Your Account.",
    icon: LogOut,
  },
];

const UserMenuItem = ({ scrolled }: { scrolled: boolean }) => {
  const { open, toggleSidebar } = useSidebar();
  return open ? (
    <CollapsibleMenuItem components={components}>
      <div className="flex gap-3">
        <UserRoundCog className="size-7" />
        <span>Account</span>
      </div>
    </CollapsibleMenuItem>
  ) : (
    <ContentNavigationMenuItem scrolled={scrolled} components={components}>
      <Button
        size="icon"
        className={`menuItems rounded-full hover:bg-primary-bg menuItemsDisplay ${scrolled ? "bg-bg hover:bg-primary-light" : "bg-primary-light"}`}
        asChild
      >
        <UserRound className="size-5 p-2" />
      </Button>
    </ContentNavigationMenuItem>
  );
};

export default UserMenuItem;
