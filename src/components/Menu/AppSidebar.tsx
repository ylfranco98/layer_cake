"use client";
import {
  Calendar,
  ChevronDown,
  Home,
  IconNode,
  Inbox,
  Search,
  Settings,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { CloseIcon } from "@sanity/icons";
import Link from "next/link";
import { useGlobalState } from "@/contexts/GlobalStateContext";
import CategoriesMenuItem from "@/components/Menu/CategoriesMenuItem";
import UserMenuItem from "./UserMenuItem";
import {
  LucideIcon,
  House,
  CookingPot,
  Lightbulb,
  NotepadText,
} from "lucide-react";
import React from "react";
import { MenuItem } from "@/lib/types";

export function AppSidebar({ menuItems }: { menuItems: MenuItem[] }) {
  const { open, toggleSidebar } = useSidebar();
  const { active, setActive } = useGlobalState();
  const iconMap = {
    Home: House,
    Recipes: CookingPot,
    Tips: Lightbulb,
    Blogs: NotepadText,
  };

  return (
    <>
      <div
        className={`w-full h-full bg-text backdrop-blur ${open ? "fixed" : "hidden"} top-0 left-0 z-50 xl:hidden`}
      >
        {" "}
      </div>
      <Sidebar
        className={`bg-white-bg w-[50%] lg:w-[30%] fixed top-0 right-0 h-full transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <SidebarContent>
          <div className="scrollbar-thumb-primary scrollbar-thumb-rounded-ful scrollbar-track-bg scrollbar-track-rounded-ful scrollbar-thin h-full overflow-y-auto">
            <SidebarGroup>
              <SidebarGroupContent>
                <CloseIcon
                  className="fixed right-0 mt-8 mr-8 size-8 text-text hover:text-black  z-100"
                  onClick={(event) => {
                    toggleSidebar();
                  }}
                />
                <SidebarMenu className="sidebarMenu">
                  {menuItems.map((item) => (
                    <SidebarMenuItem
                      key={item.name}
                      className="w-full pl-2 flex justify-start"
                    >
                      <div
                        className={`flex gap-3 menuItems w-full p-2 py-3 m-2 mx-3 ${item.name === active ? "active" : ""}`}
                      >
                        {React.createElement(iconMap[item.name], {
                          // size: 8,
                          className: "size-7",
                        })}

                        {/* <SidebarMenuButton asChild> */}
                        <Link
                          //   className={`menuItems w-full p-2 py-6 m-2 ${item.name === active ? "active" : ""}`}
                          href={item.path}
                          onClick={(event) => {
                            setActive(item.name);
                            toggleSidebar();
                          }}
                        >
                          <span>{item.name}</span>
                        </Link>
                      </div>
                      {/* </SidebarMenuButton> */}
                    </SidebarMenuItem>
                  ))}
                  <SidebarMenuItem className="w-full">
                    {open ? <CategoriesMenuItem scrolled /> : <></>}
                  </SidebarMenuItem>
                  <SidebarMenuItem className="w-full">
                    {open ? <UserMenuItem scrolled /> : <></>}
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </div>
        </SidebarContent>
      </Sidebar>
    </>
  );
}
