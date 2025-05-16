import { POST_QUERYResult } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

type AuthorProps = {
  author: NonNullable<POST_QUERYResult>["author"];
};

export function Author({ author }: AuthorProps) {
  return author?.image || author?.name ? (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Link
          className="flex items-center gap-2 default-text hover:text-primary-light "
          href=""
        >
          {author?.image ? (
            <Image
              src={urlFor(author.image).width(80).height(80).url()}
              width={80}
              height={80}
              alt={author.name || ""}
              className="bg-pink-50 size-10 shadow-inner rounded-full"
            />
          ) : null}
          {author?.name ? <h3>{author.name}</h3> : null}
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className="bg-primary-light border-none shadow-xl">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <img
              className="shrink-0 rounded-full"
              src="bakepointlogo.png"
              width={40}
              height={40}
              alt="Avatar"
            />
            <div className="space-y-0.5">
              <p className="text-sm font-medium">Keith Kennedy</p>
              <p className="text-muted-foreground text-xs">@k.kennedy</p>
            </div>
          </div>
          <p className="text-muted-foreground text-sm">
            Designer at{" "}
            <strong className="text-foreground font-medium">@Origin UI</strong>.
            Crafting web experiences with Tailwind CSS.
          </p>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1.5">
              <img
                className="ring-background rounded-full ring-1"
                src="bake.jpeg"
                width={20}
                height={20}
                alt="Friend 01"
              />
              <img
                className="ring-background rounded-full ring-1"
                src="blog.jpeg"
                width={20}
                height={20}
                alt="Friend 02"
              />
              <img
                className="ring-background rounded-full ring-1"
                src="tips.jpeg"
                width={20}
                height={20}
                alt="Friend 03"
              />
            </div>
            <div className="text-muted-foreground text-xs">
              3 mutual friends
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ) : null;
}
