"use client";
import React, { useState } from "react";
import { Brand, Category, Product } from "@/sanity.types";
import { useSearchParams } from "next/navigation";
import Container from "@/components/common/Container";
import Title from "@/components/common/Title";
import { X } from "lucide-react";

interface Props {
  categories: Category[];
  brands: Brand[];
}

const Shop = ({ categories, brands }: Props) => {
  const searchParams = useSearchParams();
  const brandParams = searchParams?.get("brand");
  const categoryParams = searchParams?.get("category");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(
    brandParams || null
  );
  const [selectedPrice, setSelectedPrice] = useState<string | null>(
    categoryParams || null
  );
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="border-t">
      <Container className="mt-5">
        <div className="sticky top-0 z-10 mb-5 bg-tech_bg_color py-2">
          <div className="flex flex-col md:flex-row justify-between gap-1 md:gap-0 items-center">
            <Title className="md:text-lg uppercase tracking-wide">
              Get the products as your needs
            </Title>
            <button className="text-tech_bg_dark-red underline text-smfont-medium hover:text-tech_bg_orange hoverEffect">
              Reset Filters
            </button>
          </div>
        </div>
        {/* Filter and products  */}

        <div className="flex flex-col md:flex-row gap-5 border-t border-t-tech_bg_dark_red">
          {/* Mobile filter overlay */}
          <div
            className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden
           ${showFilters ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          />
          {/* Filter sidebar */}
          <div
            className={`md:sticky md:top-20 md:self-start md:h-[calc(100vh-160px)] md:overflow-y-auto md:scrollbar-thin md:scrollbar-thumb-tech_orange md:scrollbar-track-gray-100 md:min-w-64 pb-5 border-r border-r-tech_bg_dark-red/50 bg_white fixed z-50 md:z-10 left-0 top-0 h-full w-[280px] overflow-y-auto transition-transform duration-300 ease-in-out ${showFilters ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
          >
            <div className="md:hidden flex justify-between items-center p-4 border-b">
              <h3>Filters</h3>
              <button>
                <X />
              </button>
            </div>
          </div>
          <div>Products</div>
        </div>
      </Container>
    </div>
  );
};

export default Shop;
