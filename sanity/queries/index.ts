import { sanityFetch } from "../lib/live";
import { BANNER_QUERY, FEATURED_PRODUCTS } from "./query";

const getBanner = async () => {
  try {
    const { data } = await sanityFetch({ query: BANNER_QUERY });
    return data ?? [];
  } catch (error) {
    console.error("Error fetching Banners Data", error);
    return [];
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

const getFeaturedProducts = async () => {
  try {
    const { data } = await sanityFetch({ query: FEATURED_PRODUCTS });
    console.log("Raw Sanity response:", { data });
    return data ?? [];
  } catch (error) {
    console.error("Error fetching featured Products Data", error);
    return [];
  }
};

// Temporary test function - get all products
const getAllProducts = async () => {
  try {
    const { data } = await sanityFetch({ query: ALL_PRODUCTS });
    console.log("All products response:", { data });
    return data ?? [];
  } catch (error) {
    console.error("Error fetching all Products Data", error);
    return [];
  }
};

export { getBanner, getCategories, getFeaturedProducts, getAllProducts };
