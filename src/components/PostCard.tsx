import { Author } from "@/components/Author";
import { Categories } from "@/components/Categories";
import { POSTS_QUERYResult } from "@/sanity/types";
import { PublishedAt } from "@/components/PublishedAt";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { DeleteButton } from "@/components/DeleteButton";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Heart, Pencil } from "lucide-react";
import { Button } from "./ui/button";
import { HeartIcon } from "@sanity/icons";
import LikeButton from "@/components/LikeButton";
import TooltipComponent from "./TooltipComponent";

export function PostCard(props: POSTS_QUERYResult[0]) {
  const { _id, title, author, mainImage, publishedAt, categories } = props;

  return (
    // <Link className="group" href={`/posts/${props.slug!.current}`}>
    //   <article className="flex flex-col-reverse gap-4 md:grid md:grid-cols-12 md:gap-0">
    //     <div className="md:col-span-2 md:pt-1">
    //       <Categories categories={categories} />
    //       <DeleteButton _id={_id} />
    //     </div>
    //     <div className="md:col-span-5 md:w-full">
    //       <h2 className="text-2xl text-pretty font-semibold text-slate-800 group-hover:text-pink-600 transition-colors relative">
    //         <span className="relative">{title}</span>
    //         <span className="bg-pink-50 absolute inset-0 rounded-lg opacity-0 transition-all group-hover:opacity-100 group-hover:scale-y-110 group-hover:scale-x-105 scale-75" />
    //       </h2>
    //       <div className="flex items-center mt-2 md:mt-6 gap-x-6">
    //         <Author author={author} />
    //         <PublishedAt publishedAt={publishedAt} />
    //       </div>
    //     </div>
    //     <div className="md:col-start-9 md:col-span-4 rounded-lg overflow-hidden flex">
    //       {mainImage ? (
    //         <Image
    //           src={urlFor(mainImage).width(400).height(200).url()}
    //           width={400}
    //           height={200}
    //           alt={mainImage.alt || title || ""}
    //         />
    //       ) : null}
    //     </div>
    //   </article>
    // </Link>
    <Card className="card cardAnimation sm:!px-0">
      <CardHeader className="flex justify-between items-center">
        <div className="flex items-center">
          <PublishedAt publishedAt={publishedAt} />
        </div>
        <div className="flex gap-4 !p-0 !m-0 justify-end items-center">
          <TooltipComponent text="Edit">
            <Pencil className="size-6 text-black/60 hover:text-primary cursor-pointer" />
          </TooltipComponent>
          <DeleteButton _id={_id} />
          <LikeButton />
        </div>
      </CardHeader>
      <CardContent className="flex justify-center place-content-center items-center h-full">
        <div className="flex lg:flex-col sm:flex-row justify-center xxl:flex-row xxl:justify-start gap-8">
          <div>
            {mainImage ? (
              <Image
                className="img sm:!w-[450px] sm:!h-auto"
                src={urlFor(mainImage).width(350).height(350).url()}
                alt="Bake"
                width={`350`}
                height="0"
              />
            ) : null}
          </div>
          <div className="flex flex-col w-full justify-between">
            <div>
              {/* md:mt-6 className="flex  gap-x-2"*/}
              {/* <div className="flex flex-col gap-4 w-full"> */}
              {/* <span className="menuItems hover:!text-black/60 flex items-center gap-2"> */}

              <Author author={author} />

              {/* </span> */}
              {/* </div> */}

              <CardTitle className="flex justify-start sm:text-2xl text-primary font-font text-start w-full text-base/8  mt-4">
                <Link
                  className="relative inline-block w-full"
                  href={`/posts/${props.slug!.current}`}
                >
                  {/* //  */}
                  <h2
                    className="w-fit hyphens-auto break-normal wrap-break-word hover:underline decoration-2 underline-offset-4 "
                    lang="en"
                  >
                    {title}
                  </h2>
                </Link>
              </CardTitle>
            </div>
            <div className="flex flex-wrap gap-3 mt-3">
              <Categories categories={categories} />
              {/* <Categories categories={categories} /> */}
            </div>
          </div>
        </div>
      </CardContent>
      {/* <CardFooter className="content "> */}
      {/* <Link
          className="button flex justify-center align-center gap-3"
          href="/posts"
        >
        
        </Link> */}
      {/* <div className="md:col-span-2 md:pt-1"> */}
      {/* <Categories categories={categories} /> */}
      {/* <DeleteButton _id={_id} /> */}
      {/* </div> */}

      {/* </CardFooter> */}
    </Card>
  );
}
