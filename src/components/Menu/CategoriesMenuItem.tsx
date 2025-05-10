"use client";

import { useEffect, useState } from "react";
import { CATEGORIES_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import ContentNavigationMenuItem from "./ContentNavigationMenuItem";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronDownIcon, SquareLibrary } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";
import CollapsibleMenuItem from "./CollapsibleMenuItem";
import { Category, CollapsibleMenuType } from "@/lib/types";
import * as LucideIcons from "lucide-react";
// import { Category } from "@/sanity/types";
import { useGlobalState } from "@/contexts/GlobalStateContext";

const CategoriesMenuItem = ({ scrolled }: { scrolled: boolean }) => {
  const { open, toggleSidebar } = useSidebar();
  const [components, setComponents] = useState<CollapsibleMenuType[]>([]);
  const { categories } = useGlobalState();

  // const fetchCategories = async () => {
  //   const response = await fetch("/api/categories");
  //   const data = await response.json();
  //   setCategories(data);
  // };

  // useEffect(() => {
  //   fetchCategories();
  // }, []);

  useEffect(() => {
    const formattedCategories: CollapsibleMenuType[] = categories.map(
      (category: Category) => {
        return {
          title: category.title ?? "Untitled",
          description: category.description ?? "No description available",
          href: `/posts/${category.title?.toLowerCase() ?? "unknown"}`,
          icon: category.icon
            ? (LucideIcons[
                category.icon as keyof typeof LucideIcons
              ] as React.ComponentType<any>)
            : (LucideIcons["Icon"] as React.ComponentType<any>),
        };
      }
    );

    setComponents(formattedCategories);
  }, [categories]);

  return open ? (
    <CollapsibleMenuItem components={components}>
      <div className="flex gap-3">
        <SquareLibrary className="size-7" />
        <span>Categories</span>
      </div>
    </CollapsibleMenuItem>
  ) : (
    <ContentNavigationMenuItem scrolled={scrolled} components={components}>
      <Button
        className={` menuItemsDisplay bg-transparent shadow-none hover:bg-transparent !p-0`}
        asChild
      >
        <div
          className={`menuItems flex items-center gap-1 p-0 ${scrolled ? "scrolledItems" : ""}`}
        >
          Categories
          <ChevronDownIcon
            className="relative top-[1px] ml-1 size-5 transition-transform transition-colors duration-300 group-data-[state=open]:rotate-180"
            aria-hidden="true"
          />
        </div>
      </Button>
    </ContentNavigationMenuItem>
  );
};

export default CategoriesMenuItem;
