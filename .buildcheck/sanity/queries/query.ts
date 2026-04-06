import { defineQuery } from "next-sanity";

const BANNER_QUERY = defineQuery(
  `*[_type == "Banner"] | order(publishedAt desc)`
);

const FEATURED_PRODUCTS = defineQuery(
  `*[_type == "product"] | order(name asc) {...,"categories": categories[]->title}`
);

const BRANDS_QUERY = defineQuery(`*[_type == "brand"] | order(name asc)`);

const RECENTLY_PUBLISHED_QUERY = defineQuery(
  `*[_type == "blog"] | order(publishedAt desc) [0...5]`
);

const PRODUCT_BY_SLUG_QUERY = defineQuery(
  `*[_type == "product" && slug.current == $slug][0] {...,"categories": categories[]->title}`
);

const BRAND_QUERY = defineQuery(
  `*[_type == "product" && slug.current == $slug]{"brandName":brand->title}`
);

export {
  BANNER_QUERY,
  FEATURED_PRODUCTS,
  BRANDS_QUERY,
  RECENTLY_PUBLISHED_QUERY,
  PRODUCT_BY_SLUG_QUERY,
  BRAND_QUERY,
};
