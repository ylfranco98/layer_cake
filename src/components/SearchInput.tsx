"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useId } from "react";
import { ArrowRightIcon, SearchIcon, XIcon } from "lucide-react";
import Form from "next/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export const SearchInput = ({ query }: { query?: string }) => {
  const id = useId();
  const router = useRouter();
  const searchParams = useSearchParams();

  const order = searchParams.get("order") || "publishedAt"; // Preserve current order
  const orderDirection = searchParams.get("orderDirection") || "desc";
  const updateQuery = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default submission behavior

    const formData = new FormData(event.currentTarget);
    const newQuery = formData.get("query") as string;

    const params = new URLSearchParams(searchParams.toString());
    params.set("query", newQuery); // ✅ Update query
    params.set("order", order); // ✅ Keep current order
    params.set("orderDirection", orderDirection);

    router.push(`?${params.toString()}`, { scroll: false }); // ✅ Update URL without reset
  };
  const reset = () => {
    // const form = document.querySelector(".search-form") as HTMLFormElement;
    // console.log(form);
    // if (form) form.reset();
    const params = new URLSearchParams(searchParams.toString());
    params.set("query", ""); // ✅ Update query
    params.set("order", order);
    params.set("orderDirection", orderDirection);
    router.push(`?${params.toString()}`, { scroll: false });
  };
  return (
    <div className="*:not-first:mt-2 ">
      {/* w-1/2 pr-6 */}
      <Form
        action="/posts"
        className="relative search-form"
        onSubmit={updateQuery}
      >
        <Input
          id={id}
          name="query"
          defaultValue={query}
          className="peer ps-9 pe-9 bg-primary-light hover:bg-white-bg focus:bg-white-bg transition-colors border-none shadow-xl py-6 default-text font-font"
          placeholder="Search..."
          type="search"
        />

        <button className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
          <SearchIcon size={16} className="text-text" />
        </button>
        {query && (
          <button
            type="reset"
            onClick={reset}
            className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-8 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
          >
            <Link href="/posts">
              <XIcon size={16} aria-hidden="true" className="text-text" />
            </Link>
          </button>
        )}
        <button
          className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
          aria-label="Submit search"
          type="submit"
        >
          <ArrowRightIcon size={16} aria-hidden="true" className="text-text" />
        </button>
      </Form>
    </div>
  );
};

// export default SearchInput;
