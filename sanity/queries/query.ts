import { defineQuery } from "next-sanity";

const BANNER_QUERY = defineQuery(
  `*[_type == "Banner"] | order(publishedAt desc)`
);

export { BANNER_QUERY };
