"use client";
import * as React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import UserMenuItem from "./UserMenuItem";
import CategoriesMenuItem from "./CategoriesMenuItem";
import { LucideIcon, Menu } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";
import { useMenuItems } from "@/contexts/MenuContext";
// import { useSidebar } from "@/contexts/SideBarContext";

export function Header({
  menuItems,
}: {
  menuItems: {
    name: string;
    path: string;
    // icon: LucideIcon;
  }[];
}) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { active, setActiveMenuItem } = useMenuItems();
  const { toggleSidebar } = useSidebar();

  useEffect(() => {
    const matchingItem = menuItems.find((item) => item.path === pathname);
    if (matchingItem) {
      setActiveMenuItem(matchingItem.name);
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`header transition-all duration-500 ${scrolled ? "scrolled" : ""}`}
    >
      <Link className="flex items-center gap-8" href="/">
        <Image
          className="rounded-full shadow-2xl border-4 border-primary-border"
          src="/bakepointlogo.png"
          alt="BakePoint logo"
          width="100"
          height="100"
        />
        <h1 className="logo">BakePoint</h1>
      </Link>
      <NavigationMenu>
        <NavigationMenuList
          className={`items-center gap-8 ${scrolled ? "text-primary" : "text-black/60"} `}
        >
          {menuItems.map((item) => (
            <NavigationMenuItem key={item.name}>
              <Link
                className={`menuItems menuItemsDisplay ${item.name === active ? "active" : ""}`}
                href={item.path}
                onClick={(event) => setActiveMenuItem(item.name)}
              >
                {item.name}
              </Link>
            </NavigationMenuItem>
          ))}
          <CategoriesMenuItem scrolled={scrolled} />
          <UserMenuItem scrolled={scrolled} />
          <NavigationMenuItem>
            <Menu
              className={`menuItems xl:hidden flex size-8 cursor-pointer`}
              onClick={(event) => toggleSidebar()}
            />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
