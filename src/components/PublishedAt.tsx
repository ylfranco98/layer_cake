import { POST_QUERYResult } from "@/sanity/types";
import dayjs from "dayjs";

type PublishedAtProps = {
  publishedAt: NonNullable<POST_QUERYResult>["publishedAt"];
};

export function PublishedAt({ publishedAt }: PublishedAtProps) {
  return publishedAt ? (
    <p className="menuItems hover:!text-black/60 !text-lg">
      Published At:
      <span className="text-primary-light pl-2">
        {dayjs(publishedAt).format("D MMMM YYYY")}
      </span>
    </p>
  ) : null;
}
