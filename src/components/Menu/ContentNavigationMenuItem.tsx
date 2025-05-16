import React, { ReactNode } from "react";
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import ListItem from "./ListItem";
import { CollapsibleMenuType } from "@/lib/types";

const ContentNavigationMenuItem = ({
  scrolled,
  components,
  children,
}: {
  scrolled: boolean;
  components: Array<CollapsibleMenuType>;
  children: ReactNode;
}) => {
  let animationTime = 0;
  return (
    <NavigationMenuItem className="flex items-center">
      <NavigationMenuTrigger>{children}</NavigationMenuTrigger>
      <NavigationMenuContent
        className={`${scrolled ? "bg-primary-light" : "bg-white-bg"} transition-all duration-500 opacity-0 fadeIn`}
      >
        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
          {components.map((component) => (
            <ListItem
              className={`hover:bg-pink-bg animate-[slide_0.3s_ease-in-out_forwards] opacity-0`}
              style={{ animationDelay: `${(animationTime += 0.05)}s` }}
              key={component.title}
              title={component.title}
              href={component.href}
              icon={component.icon}
            >
              {component.description}
            </ListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

export default ContentNavigationMenuItem;
