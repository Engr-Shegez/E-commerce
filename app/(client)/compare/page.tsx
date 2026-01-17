"use client";

import Container from "@/components/common/Container";
import Title from "@/components/common/Title";
import { Product } from "@/sanity.types";
import { client } from "@/sanity/lib/client";
import useCartStore from "@/Store";
import { ChevronLeft, Loader2 } from "lucide-react";
import Link from "next/link";
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
    fetchProducts();
  }, [searchParams]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-tech_orange" />
        <span className="ml-2">Loading comparison</span>
      </div>
    );
  }

  return (
    <div className="bg-tech_bg_color py-8">
      <Container>
        <div className="mb-6">
          <Link
            href={"/"}
            className="flex items-center text-tech_bg_green hover:text-tech_orange transition-colors hoverEffect"
          >
            <ChevronLeft /> <span>Back to Home</span>
          </Link>
          <Title className="ml-4 text-xl md:text-2xl">Product Comparison</Title>
        </div>
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Product Comparison table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody>
                {/* Search inputs */}
                <tr className="border-b">
                  <td className="p-4 bg-gray-50 font-medium">Product</td>
                  {[0, 1, 2, 3].map((index) => (
                    <td key={`search-${index}`} className="p-4 border-l">
                      <div ref={searchRefs[index]} className="relative">
                        <div className="w-full bg-gray-50 px-3 py-2 rounded-md flex items-center justify-between">
                          <input placeholder="Search Product" />
                        </div>
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ComparePage;
