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

const getCategories = async (quantity?: number) => {
  try {
    const query = quantity
      ? `*[_type == "category"] | order(name asc) [0...$quantity] {..., 
      "productCount": count(*[_type == "product" && references(^._id)])
    }`
      : `*[_type == "category"] | order(name asc) {...,"productCount": count(*[_type == "product" && references(^._id)])
    }`;

    const { data } = await sanityFetch({
      query,
      params: quantity ? { quantity } : {},
    });
    return data ?? [];
  } catch (error) {
    console.error("Error fetching Categories Data", error);
    return [];
  }
};

export { getBanner, getCategories };
