import { sanityFetch } from "../lib/live";
import { BANNER_QUERY } from "./query";

const getBanner = async () => {
  try {
    const { data } = await sanityFetch({ query: BANNER_QUERY });
    return data ?? [];
  } catch (error) {
    console.error("Error fetching Banners Data", error);
  }
};

export { getBanner };
