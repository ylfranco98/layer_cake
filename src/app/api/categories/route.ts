import { CATEGORIES_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";

export async function GET() {
  const { data: categories } = await sanityFetch({ query: CATEGORIES_QUERY });
  return Response.json(categories);
}
