import { Author } from "@/components/PostsPage/Author";
import { Categories } from "@/components/PostsPage/Categories";
import { POSTS_QUERYResult } from "@/sanity/types";
import { PublishedAt } from "@/components/PostsPage/PublishedAt";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { DeleteButton } from "@/components/PostsPage/DeleteButton";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Heart, Pencil } from "lucide-react";
import { Button } from "../ui/button";
import { HeartIcon } from "@sanity/icons";
import LikeButton from "@/components/PostsPage/LikeButton";
import TooltipComponent from "../TooltipComponent";

export function PostCard(props: POSTS_QUERYResult[0]) {
  const { _id, title, author, mainImage, publishedAt, categories } = props;

  return (
    <Card className="card cardAnimation sm:!px-0">
      <CardHeader className="flex justify-between items-center">
        <div className="flex items-center">
          <PublishedAt publishedAt={publishedAt} />
        </div>
        <div className="flex gap-4 !p-0 !m-0 justify-end items-center">
          <TooltipComponent text="Edit">
            <Pencil className="size-6 interact-icon" />
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
              <Author author={author} />
              <CardTitle className="flex justify-start sm:text-2xl text-primary font-font text-start w-full text-base/8  mt-4">
                <Link
                  className="relative inline-block w-full"
                  href={`/posts/${props.slug!.current}`}
                >
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
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
