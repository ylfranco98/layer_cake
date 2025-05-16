import Link from "next/link";
// import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { Author, Post } from "@/sanity/types";
import { PostCard } from "@/components/PostCard";
import { Title } from "@/components/Title";
import { SearchInput } from "@/components/SearchInput";
import CategoryFilter from "@/components/CategoryFilter";
import CategoryFilterCheck from "@/components/CategoryFilterCheck";
import OrderByButton from "@/components/OrderByButton";
import CreatePostButton from "@/components/CreatePostButton";

// const options = { next: { revalidate: 60 } };

export default async function Page() {
  //   const posts = await client.fetch(POSTS_QUERY, {}, options);
  const { data: posts } = await sanityFetch({ query: POSTS_QUERY });
  let animationTime = 0;

  return (
    <section className="mt-[250px] mx-[10%] p-0 ">
      <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-2 gap-8">
        <SearchInput />
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
