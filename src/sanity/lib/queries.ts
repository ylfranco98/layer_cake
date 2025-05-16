import { defineQuery } from "next-sanity";

export const definePostQuery = ({
  search,
  order,
  orderDirection,
  categoriesFilter,
}: {
  search: string;
  order: string;
  orderDirection: string;
  categoriesFilter: string[];
}) => {
  // && defined($categoriesFilter) && select(defined($categoriesFilter) => $categoriesFilter in categories[]->slug.current,true)
  const query = `*[_type == "post" && defined(slug.current) ${search ? "&& (!defined($search) || title match $search || publishedAt match $search || author->name match $search)" : ""}  ${categoriesFilter.length > 0 ? "&& count((categories[]->slug.current)[@ in $categoriesFilter]) > 0" : ""}] | order(${order} ${orderDirection}){
  _id,
  title,
  slug,
  body,
  mainImage,
  publishedAt,
  "categories": coalesce(
    categories[]->{
      _id,
      slug,
      title
    },
    []
  ),
  author->{
    name,
    image
  }
}`;
  console.log(categoriesFilter);
  return defineQuery(query);
};
export const POSTS_SLUGS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)]{ 
  "slug": slug.current
}`);

export const POST_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  body,
  mainImage,
  publishedAt,
  "categories": coalesce(
    categories[]->{
      _id,
      slug,
      title
    },
    []
  ),
  author->{
    name,
    image
  }
}`);

export const CATEGORIES_QUERY =
  defineQuery(`*[_type == "category"&& defined(slug.current)]|order(title asc){slug,title,description,icon}
`);
