import React, { ReactNode, useState } from "react";
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
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useMenuItems } from "@/contexts/MenuContext";
import { CollapsibleMenuType } from "@/lib/types";

const CollapsibleMenuItem = ({
  components,
  children,
}: {
  components: Array<CollapsibleMenuType>;
  children: ReactNode;
}) => {
  const { open, toggleSidebar } = useSidebar();
  const { active, setActiveMenuItem } = useMenuItems();
  const [isCollapsed, setCollapsed] = useState(false);
  let animationTime = 0;
  return (
    <Collapsible
      className={`group/collapsible p-2 mx-2 mb-2 rounded-xl transition-colors ${isCollapsed ? "bg-bg  shadow-[0px_5px_10px_rgba(0,0,0,0.2)]" : "bg-transparent  shadow-none"}`}
    >
      {/* className=" w-full" */}
      <SidebarGroup>
        <SidebarGroupLabel asChild>
          <CollapsibleTrigger>
            {/* className="group-data-[state=open]/collapsible:text-primay" */}
            <SidebarMenuItem
              className={`w-full hover:text-primary transition duration-300 text-xl font-semibold flex justify-start cursor-pointer ${isCollapsed ? "text-primary" : "text-black/60"}`}
              onClick={(event) => setCollapsed((prev) => !prev)}
            >
              {children}
              <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180 group-data-[state=open]/collapsible:text-primary" />
            </SidebarMenuItem>
          </CollapsibleTrigger>
        </SidebarGroupLabel>
        <CollapsibleContent>
          <SidebarGroupContent>
            <SidebarMenu className="sidebarMenu">
              {/* className="sidebarMenu pt-8 mx-4 mr-4" */}
              {components.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className="animate-[slide_0.3s_ease-in-out_forwards] opacity-0 "
                  style={{ animationDelay: `${(animationTime += 0.05)}s` }}
                >
                  {/* <SidebarMenuButton asChild> */}
                  {/* <Link
                      className={`menuItems w-full p-2 py-6 m-2 ${item.title === active ? "active" : ""}`}
                      // className={`menuItems ${item.title === active ? "active" : ""}`}
                      href={`${item.href}`}
                      onClick={(event) => {
                        setActiveMenuItem(item?.title || "");
                        toggleSidebar();
                      }}
                    >
                      {/* <item.icon /> */}
                  {/* <span>{item.title}</span>
                    </Link> */}
                  <div
                    className={`flex gap-3 menuItems w-full p-2 py-3 m-2 ${item.title === active ? "active" : ""}`}
                  >
                    {item.icon &&
                      React.createElement(item.icon, {
                        // size: 8,
                        className: "size-7",
                      })}

                    {/* <SidebarMenuButton asChild> */}
                    <Link
                      //   className={`menuItems w-full p-2 py-6 m-2 ${item.name === active ? "active" : ""}`}
                      href={`${item.href}`}
                      onClick={(event) => {
                        setActiveMenuItem(item.title ? item.title : "");
                        toggleSidebar();
                      }}
                    >
                      <span>{item.title}</span>
                    </Link>
                  </div>
                  {/* </SidebarMenuButton> */}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </CollapsibleContent>
      </SidebarGroup>
    </Collapsible>
  );
};

export default CollapsibleMenuItem;
