"use client";
import React, { useEffect, useState } from "react";
import { useId } from "react";

import { Label } from "@/components/ui/label";
import MultipleSelector, { Option } from "@/components/ui/multiselect";
import { Category, PostForm } from "@/lib/types";
import { useGlobalState } from "@/contexts/GlobalStateContext";

const CategoryFilter = ({
  formState,
  setState,
}: {
  formState: PostForm;
  setState: React.Dispatch<React.SetStateAction<PostForm>>;
}) => {
  const id = useId();
  const { categories } = useGlobalState();
  const [frameworks, setFrameworks] = useState<Option[]>(
    categories.map((category: Category) => ({
      value: category._id, // Convert title to slug format
      label: category.title,
      //   disable: category.title === "Nuxt.js" || category.title === "Eleventy", // Example condition
    }))
  );
  const [selected, setSelected] = useState<Option[]>(formState.category);
  //   {

  //     value: "next.js",
  //     label: "Next.js",
  //   },
  //   {
  //     value: "sveltekit",
  //     label: "SvelteKit",
  //   },
  //   {
  //     value: "nuxt.js",
  //     label: "Nuxt.js",
  //     disable: true,
  //   },
  //   {
  //     value: "remix",
  //     label: "Remix",
  //   },
  //   {
  //     value: "astro",
  //     label: "Astro",
  //   },
  //   {
  //     value: "angular",
  //     label: "Angular",
  //   },
  //   {
  //     value: "vue",
  //     label: "Vue.js",
  //   },
  //   {
  //     value: "react",
  //     label: "React",
  //   },
  //   {
  //     value: "ember",
  //     label: "Ember.js",
  //   },
  //   {
  //     value: "gatsby",
  //     label: "Gatsby",
  //   },
  //   {
  //     value: "eleventy",
  //     label: "Eleventy",
  //     disable: true,
  //   },
  //   {
  //     value: "solid",
  //     label: "SolidJS",
  //   },
  //   {
  //     value: "preact",
  //     label: "Preact",
  //   },
  //   {
  //     value: "qwik",
  //     label: "Qwik",
  //   },
  //   {
  //     value: "alpine",
  //     label: "Alpine.js",
  //   },
  //   {
  //     value: "lit",
  //     label: "Lit",
  //   },
  // ]);
  const framework: Option[] = [
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
      disable: true,
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
    {
      value: "angular",
      label: "Angular",
    },
    {
      value: "vue",
      label: "Vue.js",
    },
    {
      value: "react",
      label: "React",
    },
    {
      value: "ember",
      label: "Ember.js",
    },
    {
      value: "gatsby",
      label: "Gatsby",
    },
    {
      value: "eleventy",
      label: "Eleventy",
      disable: true,
    },
    {
      value: "solid",
      label: "SolidJS",
    },
    {
      value: "preact",
      label: "Preact",
    },
    {
      value: "qwik",
      label: "Qwik",
    },
    {
      value: "alpine",
      label: "Alpine.js",
    },
    {
      value: "lit",
      label: "Lit",
    },
  ];
  // const fetchCategories = async () => {
  //   const response = await fetch("/api/categories");
  //   const data = await response.json();

  //   // Convert categories into frameworks structure dynamically
  //   const formattedFrameworks: Option[] = data.map((category: Category) => ({
  //     value: category.title, // Convert title to slug format
  //     label: category.title,
  //     //   disable: category.title === "Nuxt.js" || category.title === "Eleventy", // Example condition
  //   }));

  //   setCategories(data);
  //   setFrameworks(formattedFrameworks);
  // };

  // Call fetchCategories when needed
  useEffect(() => {
    const formattedFrameworks: Option[] = categories.map(
      (category: Category) => ({
        value: category.title, // Convert title to slug format
        label: category.title,
        //   disable: category.title === "Nuxt.js" || category.title === "Eleventy", // Example condition
      })
    );
    setFrameworks(formattedFrameworks);
  }, []);

  useEffect(() => {
    setState({ ...formState, category: selected });
  }, [selected]);

  return (
    // <div className="*:not-first:mt-2 flex">
    //   {/* *:not-first:mt-2 */}
    <div className="w-full">
      {
        <MultipleSelector
          className="font-font text-text !w-full !px-0"
          commandProps={{
            label: "Select frameworks",
          }}
          value={selected}
          onChange={setSelected}
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
    // </div>
  );
};

export default CategoryFilter;
