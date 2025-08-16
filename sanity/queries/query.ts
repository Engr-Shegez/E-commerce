import { defineQuery } from "next-sanity";

const BANNER_QUERY = defineQuery(
  `*[_type == "Banner"] | order(publishedAt desc)`
);

// Temporary test query - get ALL products
const FEATURED_PRODUCTS = defineQuery(
  `*[_type == "product"] | order(name asc) {...,"categories": categories[]->title}`
);

const BRANDS_QUERY = defineQuery(`*[_type == "brand"] | order(name asc)`);

const RECENTLY_PUBLISHED_QUERY = defineQuery(
  `*[_type == "blog" && isLatest == true] | order(name asc){..., blogcategories[]->{
  title}}`
);

const PRODUCT_BY_SLUG_QUERY = defineQuery(
  `*[_type == "product" && slug.current == $slug] | order(name asc) [0]`
);

export {
  BANNER_QUERY,
  FEATURED_PRODUCTS,
  BRANDS_QUERY,
  RECENTLY_PUBLISHED_QUERY,
  PRODUCT_BY_SLUG_QUERY,
};
