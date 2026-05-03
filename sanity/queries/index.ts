import { client } from "../lib/client";
import {
  BANNER_QUERY,
  BRAND_QUERY,
  BRANDS_QUERY,
  FEATURED_PRODUCTS,
  PRODUCT_BY_SLUG_QUERY,
  RECENTLY_PUBLISHED_QUERY,
} from "./query";

const logSanityError = (message: string, error: unknown) => {
  console.error(message, error instanceof Error ? error.message : error);
};

const getBanner = async () => {
  try {
    const data = await client.fetch(BANNER_QUERY);
    return data ?? [];
  } catch (error) {
    logSanityError("Error fetching Banners Data", error);
    return [];
  }
};

const getCategories = async (quantity?: number) => {
  try {
    const hasQuantity = typeof quantity === "number";
    const query = hasQuantity
      ? `*[_type == "category"] | order(name asc) [0...$quantity] {..., "productCount": count(*[_type == "product" && references(^._id)])}`
      : `*[_type == "category"] | order(name asc) {..., "productCount": count(*[_type == "product" && references(^._id)])}`;

    const data = await client.fetch(query, hasQuantity ? { quantity } : {});
    return data ?? [];
  } catch (error) {
    logSanityError("Error fetching Categories Data", error);
    return [];
  }
};

const getFeaturedProducts = async () => {
  try {
    const data = await client.fetch(FEATURED_PRODUCTS);
    return data ?? [];
  } catch (error) {
    logSanityError("Error fetching featured Products Data", error);
    return [];
  }
};

// Temporary test function - get all products
const getAllProducts = async () => {
  try {
    const data = await client.fetch(FEATURED_PRODUCTS);
    return data ?? [];
  } catch (error) {
    logSanityError("Error fetching all Products Data", error);
    return [];
  }
};

const getAllBrands = async () => {
  try {
    const data = await client.fetch(BRANDS_QUERY);
    return data ?? [];
  } catch (error) {
    logSanityError("Error fetching all Brands Data", error);
    return [];
  }
};

const getRecentlyPublished = async () => {
  try {
    const data = await client.fetch(RECENTLY_PUBLISHED_QUERY);
    return data ?? [];
  } catch (error) {
    logSanityError("Error fetching all Blog Data", error);
    return [];
  }
};

const getAllBlogs = async () => {
  try {
    const data = await client.fetch(`*[_type == "blog"] | order(publishedAt desc){
        ...,
        "authorName": author->name,
        "blogcategories": blogcategories[]->
      }`);
    return data ?? [];
  } catch (error) {
    logSanityError("Error fetching all blogs", error);
    return [];
  }
};

const getBlogBySlug = async (slug: string) => {
  try {
    const data = await client.fetch(
      `*[_type == "blog" && slug.current == $slug][0]{
        ...,
        "authorName": author->name,
        "blogcategories": blogcategories[]->
      }`,
      { slug }
    );
    return data ?? null;
  } catch (error) {
    logSanityError("Error fetching blog by slug", error);
    return null;
  }
};

const getCategoryBySlug = async (slug: string) => {
  try {
    const data = await client.fetch(
      `*[_type == "category" && slug.current == $slug][0]`,
      { slug }
    );
    return data ?? null;
  } catch (error) {
    logSanityError("Error fetching category by slug", error);
    return null;
  }
};

const getProductsByCategorySlug = async (slug: string) => {
  try {
    const data = await client.fetch(
      `*[_type == "product" && references(*[_type == "category" && slug.current == $slug][0]._id)] | order(name asc){
        ...,
        "categories": categories[]->title,
        "brand": brand->
      }`,
      { slug }
    );
    return data ?? [];
  } catch (error) {
    logSanityError("Error fetching products by category slug", error);
    return [];
  }
};

const getProductBySlug = async (slug: string) => {
  try {
    const product = await client.fetch(PRODUCT_BY_SLUG_QUERY, { slug });
    return product ?? null;
  } catch (error) {
    logSanityError("Error fetching product by ID", error);
    return null;
  }
};

const getBrand = async (slug: string) => {
  try {
    const product = await client.fetch(BRAND_QUERY, { slug });
    return product ?? null;
  } catch (error) {
    logSanityError("Error fetching product by ID", error);
    return null;
  }
};

export {
  getBanner,
  getCategories,
  getFeaturedProducts,
  getAllProducts,
  getAllBrands,
  getRecentlyPublished,
  getAllBlogs,
  getBlogBySlug,
  getCategoryBySlug,
  getProductsByCategorySlug,
  getProductBySlug,
  getBrand,
};
