import { defineQuery } from "next-sanity";

const BANNER_QUERY = defineQuery(
  `*[_type == "Banner"] | order(publishedAt desc)`
);

// Temporary test query - get ALL products
const FEATURED_PRODUCTS = defineQuery(
  `*[_type == "product"] | order(name asc) {...,"categories": categories[]->title}`
);

export { BANNER_QUERY, FEATURED_PRODUCTS };
