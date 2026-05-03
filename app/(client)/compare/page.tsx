"use client";

import Container from "@/components/common/Container";
import Title from "@/components/common/Title";
import { Product } from "@/sanity.types";
import { client } from "@/sanity/lib/client";
import { ChevronLeft, Loader2, Search, X } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { useCallback, useEffect, useRef, useState } from "react";

const ComparePage = () => {
  const searchParams = useSearchParams();
  const [, setProducts] = useState<(Product | null)[]>([
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
  const [showResults, setShowResults] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);
  const searchRefs = useRef<Array<HTMLDivElement | null>>([null, null, null, null]);

  // Fetch products based on URL params
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const product1Slug = searchParams.get("product1");
        const product2Slug = searchParams.get("product2");
        const newProducts: (Product | null)[] = [null, null, null, null];
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

  // Handle search for each column
  const handleSearch = useCallback(
    async (index: number, searchTerm: string) => {
      if (!searchTerm) {
        setSearchResults((prev) => {
          const newResults = [...prev];
          newResults[index] = [];
          return newResults;
        });
        return;
      }

      try {
        const query = `*[_type == "product" && name match $search] | order(name asc)[0...10]`;
        const params = { search: `${searchTerm}*` };
        const response = await client.fetch(query, params);

        setSearchResults((prev) => {
          const newResults = [...prev];
          newResults[index] = response;
          return newResults;
        });
      } catch (error) {
        console.error("Error searching products:", error);
      }
    },
    [],
  );

  // Debounce search

  useEffect(() => {
    const debounceTimers = searches.map((search, index) => {
      return setTimeout(() => {
        handleSearch(index, search);
      }, 300);
    });

    return () => {
      debounceTimers.forEach((timer) => clearTimeout(timer));
    };
  }, [searches, handleSearch]);

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      searchRefs.current.forEach((ref, index) => {
        if (ref && !ref.contains(event.target as Node)) {
          setShowResults((prev) => {
            const newShow = [...prev];
            newShow[index] = false;
            return newShow;
          });
        }
      });
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const clearProduct = (index: number) => {
    setProducts((prev) => {
      const newProducts = [...prev];
      newProducts[index] = null;
      return newProducts;
    });

    setSearches((prev) => {
      const newSearches = [...prev];
      newSearches[index] = "";
      return newSearches;
    });

    // Update URL by removing the product
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);

    if (index === 0) params.delete("product1");
    if (index === 1) params.delete("product2");
    if (index === 2) params.delete("product3");
    if (index === 3) params.delete("product4");

    window.history.pushState({}, "", `${url.pathname}?${params.toString()}`);
  };

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
            className="flex items-center text-tech_bg_green hover:text-tech_orange transition-colors hoverEffect w-40"
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
                      <div
                        ref={(element) => {
                          searchRefs.current[index] = element;
                        }}
                        className="relative"
                      >
                        <div className="w-full bg-gray-50 px-3 py-2 rounded-md flex items-center justify-between">
                          <input
                            placeholder="Search Product"
                            className="flex-1 outline-0 text-sm bg-transparent mr-2"
                            value={searches[index]}
                            onChange={(e) => {
                              setSearches((prev) => {
                                const newSearches = [...prev];
                                newSearches[index] = e.target.value;
                                return newSearches;
                              });
                            }}
                            onFocus={() => {
                              setShowResults((prev) => {
                                const newShow = [...prev];
                                newShow[index] = true;
                                return newShow;
                              });
                            }}
                          />
                          {searches[index] ? (
                            <X
                              size={16}
                              className="cursor-pointer text-gray-500 hover:text-tech_orange"
                              onClick={() => clearProduct(index)}
                            />
                          ) : (
                            <Search size={18} className="text-gray-400" />
                          )}
                        </div>
                        {/* Search results dropdown */}
                        {showResults[index] ? (
                          <div></div>
                        ) : searchResults[index].length > 0 ? (
                          <div></div>
                        ) : searches[index] ? (
                          <div>No Products found</div>
                        ) : null}
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
