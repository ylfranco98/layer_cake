import React from "react";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

type ListItemProps = React.ComponentPropsWithoutRef<"a"> & {
  title: string | undefined;
  icon?: React.ComponentType<any>; // Add the `icon` prop as optional
};

const ListItem = React.forwardRef<React.ComponentRef<"a">, ListItemProps>(
  ({ className, title, icon, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-xl p-3 w-full h-full leading-none no-underline outline-none transition-colors hover:bg-bg hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="flex gap-3">
              <div className="flex items-center">
                {icon &&
                  React.createElement(icon, {
                    // size: 8,
                    className: "size-8",
                  })}
              </div>
              <div className="block">
                <div className="text-sm font-medium leading-none">{title}</div>
                <p className="line-clamp-3 text-sm leading-snug text-muted-foreground">
                  {children}
                </p>
              </div>
            </div>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

export default ListItem;
