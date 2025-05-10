import { Author } from "@/components/PostsPage/Author";
import { Categories } from "@/components/PostsPage/Categories";
import { components } from "@/sanity/portableTextComponents";
import { PortableText } from "next-sanity";
import { POST_QUERYResult } from "@/sanity/types";
import { PublishedAt } from "@/components/PostsPage/PublishedAt";
import { Title } from "@/components/Title";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export function Post(props: NonNullable<POST_QUERYResult>) {
  const { title, author, mainImage, body, publishedAt, categories } = props;

  return (
    <article className="grid lg:grid-cols-12 gap-y-12">
      <header className="lg:col-span-12 flex flex-col gap-4 items-start">
        <div className="flex gap-4 items-center">
          <Categories categories={categories} />
          <PublishedAt publishedAt={publishedAt} />
        </div>
        <Title>{title}</Title>
        <Author author={author} />
      </header>
      {mainImage ? (
        <figure className="lg:col-span-4 flex flex-col gap-2 items-start">
          <Image
            src={urlFor(mainImage).width(400).height(400).url()}
            width={400}
            height={400}
            alt=""
          />
          {/* <Image
          className="w-full aspect-[800/500]"
          src={urlFor(post.mainImage)
            .width(800)
            .height(500)
            .quality(80)
            .auto("format")
            .url()}
          alt={post?.mainImage?.alt || ""}
          width="800"
          height="500"
        /> */}
        </figure>
      ) : null}
      {body ? (
        <div className="lg:col-span-7 lg:col-start-6 prose lg:prose-lg">
          {/* <div className="prose-xl"> */}
          <PortableText value={body} components={components} />
        </div>
      ) : null}
    </article>
  );
}
