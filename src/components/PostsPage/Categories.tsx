import { POST_QUERYResult } from "@/sanity/types";

type CategoriesProps = {
  categories: NonNullable<POST_QUERYResult>["categories"];
};

export function Categories({ categories }: CategoriesProps) {
  return categories.map((category) => (
    <span
      key={category._id}
      className="bg-pink-bg rounded-full p-2 leading-none whitespace-nowrap primary-md"
    >
      {category.title}
    </span>
  ));
}
