"use client";

import { Product } from "@/sanity.types";
import { client } from "@/sanity/lib/client";
import useCartStore from "@/Store";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const ComparePage = () => {
  const { addItem } = useCartStore();
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<(Product | null)[]>([
    null,
    null,
    null,
    null,
  ]);
  const [loading, setLoading] = useState(true);

  // Search states for each column
  const [searches, setSearches] = useState<string[]>(["", "", "", ""]);
  const [searchResults, setSearchResults] = useState<Product[][]>([
    [],
    [],
    [],
    [],
  ]);
  const [loadingSearches, setLoadingSearches] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);
  const [showResults, setShowResults] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);
  const searchRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  // Fetch products based on URL params
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const product1Slug = searchParams.get("product1");
        const product2Slug = searchParams.get("product2");
        const newProducts = [...products];
        if (product1Slug) {
          const query = `*[_type == "product" && slug.current == $slug][0]`;
          const product1 = await client.fetch(query, { slug: product1Slug });
          newProducts[0] = product1;
          setSearches((prev) => {
            const newSearches = [...prev];
            newSearches[0] = product1.name || "";
            return newSearches;
          });
        }
        if (product2Slug) {
          const query = `*[_type == "product" && slug.current == $slug][0]`;
          const product2 = await client.fetch(query, { slug: product2Slug });
          newProducts[1] = product2;
          setSearches((prev) => {
            const newSearches = [...prev];
            newSearches[1] = product2.name || "";
            return newSearches;
          });
        }

        setProducts(newProducts);
      } catch (error) {
        console.error("Error fetching Products", error);
      } finally {
        setLoading(false);
      }
    };
  }, []);
  return <div>Compare Page</div>;
};

export default ComparePage;
