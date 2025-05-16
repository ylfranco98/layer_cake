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
import TooltipComponent from "../TooltipComponent";
import { useRouter, useSearchParams } from "next/navigation";
import { title } from "node:process";

type Checked = DropdownMenuItemProps[];

const CategoryFilterCheck = () => {
  const [selectedCategories, setSelectedCategories] = useState<
    Record<string, boolean>
  >({});
  const { categories } = useGlobalState();
  const router = useRouter();
  const searchParams = useSearchParams();

  const order = searchParams.get("order") || "publishedAt"; // Preserve current order
  const orderDirection = searchParams.get("orderDirection") || "desc";
  const query = searchParams.get("query") || "";

  const [categoriesFilter, setCategoriesFilter] = useState<string[]>(
    searchParams.get("categoriesFilter")?.split(",") || []
  );
  useEffect(() => {
    // Initialize checkboxes to "false"
    const initialState = categories.reduce(
      (acc, category) => {
        acc[category.slug.current] = false; // Default unchecked
        return acc;
      },
      {} as Record<string, boolean>
    );
    setSelectedCategories(initialState);
  }, [categories]);

  const updateQuery = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("query", query); // ✅ Update query
    params.set("order", order); // ✅ Keep current order
    params.set("orderDirection", orderDirection);
    params.set("categoriesFilter", categoriesFilter.join(","));

    router.push(`?${params.toString()}`, { scroll: false }); // ✅ Update URL without reset
  };

  useEffect(() => {
    updateQuery();
  }, [categoriesFilter]);

  useEffect(() => {
    const result = Object.entries(selectedCategories)
      .filter(([key, value]) => value)
      .map(([key]) => key);
    setCategoriesFilter(result);
  }, [selectedCategories]);

  return (
    <DropdownMenu>
      <TooltipComponent text="Filter by Categories">
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="icon-button">
            <SlidersHorizontal className="icon" aria-hidden="true" />
          </Button>
        </DropdownMenuTrigger>
      </TooltipComponent>
      <DropdownMenuContent className="dropdown-content">
        {categories.map((category) => {
          return (
            <DropdownMenuCheckboxItem
              className="dropdown-item"
              key={category.title}
              checked={selectedCategories[category.slug.current]}
              onCheckedChange={(checked: boolean) => {
                setSelectedCategories((prev) => ({
                  ...prev,
                  [category.slug.current]: checked,
                }));
              }}
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
