import Link from "next/link";
// import { client } from "@/sanity/lib/client";
import { definePostQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { Author, Post } from "@/sanity/types";
import { PostCard } from "@/components/PostsPage/PostCard";
import { Title } from "@/components/Title";
import { SearchInput } from "@/components/SearchInput";
import CategoryFilter from "@/components/PostsPage/CategoryFilter";
import CategoryFilterCheck from "@/components/PostsPage/CategoryFilterCheck";
import OrderByButton from "@/components/PostsPage/OrderByButton";
import CreatePostButton from "@/components/PostsPage/CreatePostButton";

// const options = { next: { revalidate: 60 } };

export default async function Page({
  searchParams,
  orderParams = Promise.resolve({
    order: "publishedAt",
    orderDirection: "desc",
  }),
}: {
  searchParams: Promise<{ query?: string }>;
  orderParams: Promise<{ order?: string; orderDirection?: string }>;
}) {
  const query = (await searchParams).query;
  const order = (await orderParams).order;
  const orderDirection = (await orderParams).orderDirection;
  const params = { search: query || null, order: order || null };
  //   const posts = await client.fetch(POSTS_QUERY, {}, options);
  const { data: posts } = await sanityFetch({
    query: definePostQuery({
      search: query ?? "",
      order: order ?? "",
      orderDirection: orderDirection ?? "",
      categoriesFilter: "",
    }),
    params: { search: query ?? "" },
  });
  let animationTime = 0;

  // console.log(posts);
  return (
    <section className="mt-[250px] mx-[10%] p-0 ">
      <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-2 gap-8">
        <SearchInput query={query} />
        <div className="flex justify-end items-center gap-8">
          <CreatePostButton />
          <OrderByButton />
          <CategoryFilterCheck />
        </div>
      </div>
      <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-2 gap-8 py-12 justify-center ">
        {/* flex flex-wrap gap-12  */}
        {posts.map((post: any) => (
          <PostCard
            key={post._id}
            {...post}
            // className="animate-[slide_0.3s_ease-in-out_forwards] opacity-0"
            // style={{ animationDelay: `${(animationTime += 0.05)}s` }}
          />
        ))}
      </div>
      {/* <hr />
      <Link href="/">&larr; Return home</Link> */}
    </section>
  );
}
