"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import { DropdownMenuItemProps } from "@radix-ui/react-dropdown-menu";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useGlobalState } from "@/contexts/GlobalStateContext";
import { SlidersHorizontal } from "lucide-react";
import * as LucideIcons from "lucide-react"; // Import all icons dynamically
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Checked = DropdownMenuItemProps[];

const CategoryFilterCheck = () => {
  const [selectedCategories, setSelectedCategories] = useState<
    Record<string, boolean>
  >({});
  const { categories } = useGlobalState();
  useEffect(() => {
    // Initialize checkboxes to "false"
    const initialState = categories.reduce(
      (acc, category) => {
        acc[category.title] = false; // Default unchecked
        return acc;
      },
      {} as Record<string, boolean>
    );
    setSelectedCategories(initialState);
  }, [categories]);

  return (
    <DropdownMenu>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="icon-button">
                <SlidersHorizontal
                  className="icon"
                  // size={20}
                  aria-hidden="true"
                />
              </Button>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent className="dark p-4 text-md bg-primary-light font-semibold text-black/60">
            Filter by Categories
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DropdownMenuContent className="dropdown-content">
        {categories.map((category) => {
          // console.log("Category Icon:", category.icon);
          return (
            <DropdownMenuCheckboxItem
              className="dropdown-item"
              key={category.title}
              checked={selectedCategories[category.title]}
              onCheckedChange={(checked: boolean) =>
                setSelectedCategories((prev) => ({
                  ...prev,
                  [category.title]: checked,
                }))
              }
            >
              <div className="">
                {category.icon &&
                  React.createElement(
                    LucideIcons[
                      category.icon as keyof typeof LucideIcons
                    ] as React.ComponentType<any>,
                    {
                      // size: 8,
                      className: "dropdown-item-icon",
                    }
                  )}
                <span> {category.title}</span>
              </div>
            </DropdownMenuCheckboxItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CategoryFilterCheck;
