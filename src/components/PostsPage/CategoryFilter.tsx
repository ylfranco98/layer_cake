"use client";
import React, { useEffect, useState } from "react";
import { useId } from "react";

import { Label } from "@/components/ui/label";
import MultipleSelector, { Option } from "@/components/ui/multiselect";
import { Category } from "@/sanity/types";

const CategoryFilter = () => {
  const id = useId();
  const [categories, setCategories] = useState<Category[]>([]);
  const [frameworks, setFrameworks] = useState<Option[]>([]);
  //     {
  //       value: "next.js",
  //       label: "Next.js",
  //     },
  //     {
  //       value: "sveltekit",
  //       label: "SvelteKit",
  //     },
  //     {
  //       value: "nuxt.js",
  //       label: "Nuxt.js",
  //       disable: true,
  //     },
  //     {
  //       value: "remix",
  //       label: "Remix",
  //     },
  //     {
  //       value: "astro",
  //       label: "Astro",
  //     },
  //     {
  //       value: "angular",
  //       label: "Angular",
  //     },
  //     {
  //       value: "vue",
  //       label: "Vue.js",
  //     },
  //     {
  //       value: "react",
  //       label: "React",
  //     },
  //     {
  //       value: "ember",
  //       label: "Ember.js",
  //     },
  //     {
  //       value: "gatsby",
  //       label: "Gatsby",
  //     },
  //     {
  //       value: "eleventy",
  //       label: "Eleventy",
  //       disable: true,
  //     },
  //     {
  //       value: "solid",
  //       label: "SolidJS",
  //     },
  //     {
  //       value: "preact",
  //       label: "Preact",
  //     },
  //     {
  //       value: "qwik",
  //       label: "Qwik",
  //     },
  //     {
  //       value: "alpine",
  //       label: "Alpine.js",
  //     },
  //     {
  //       value: "lit",
  //       label: "Lit",
  //     },
  //   ]);
  // const frameworks: Option[] = ;
  const fetchCategories = async () => {
    const response = await fetch("/api/categories");
    const data = await response.json();

    // Convert categories into frameworks structure dynamically
    const formattedFrameworks: Option[] = data.map((category: Category) => ({
      value: category.title, // Convert title to slug format
      label: category.title,
      //   disable: category.title === "Nuxt.js" || category.title === "Eleventy", // Example condition
    }));

    setCategories(data);
    setFrameworks(formattedFrameworks);
  };

  // Call fetchCategories when needed
  useEffect(() => {
    fetchCategories();
  }, []);
  //   useEffect(() => {
  //     console.log("Categories:", categories);
  //     console.log("Frameworks:", frameworks);
  //   }, [categories, frameworks]);
  return (
    <div className="*:not-first:mt-2 flex justify-end items-center">
      {/* *:not-first:mt-2 */}
      <div className="w-2/3">
        {
          <MultipleSelector
            className=""
            commandProps={{
              label: "Select frameworks",
            }}
            // value={frameworks.slice(0, 2)}
            defaultOptions={frameworks}
            placeholder="Filter Categories"
            //   hideClearAllButton
            hidePlaceholderWhenSelected
            emptyIndicator={
              <p className="text-center text-sm text-text">No results found</p>
            }
          />
        }
      </div>
    </div>
  );
};

export default CategoryFilter;
