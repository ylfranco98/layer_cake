import Link from "next/link";
// import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { Author, Post } from "@/sanity/types";
import { PostCard } from "@/components/PostCard";
import { Title } from "@/components/Title";

// const options = { next: { revalidate: 60 } };

export default async function Page() {
  //   const posts = await client.fetch(POSTS_QUERY, {}, options);
  const { data: posts } = await sanityFetch({ query: POSTS_QUERY });

  return (
    <main className="container">
      <Title>Post Index</Title>
      <div className="flex flex-col gap-24 py-12">
        {posts.map((post: any) => (
          <PostCard key={post._id} {...post} />
        ))}
      </div>
      {/* <hr />
      <Link href="/">&larr; Return home</Link> */}
    </main>
  );
}
