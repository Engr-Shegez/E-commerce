"use client";
import { Product } from "@/sanity.types";
import { Search } from "lucide-react";
import React, { useRef, useState } from "react";

const ProductComparison = () => {
  const [productOne, setProductOne] = useState<Product | null>(null);
  const [productTwo, setProductTwo] = useState<Product | null>(null);
  const [searchOne, setSearchOne] = useState("");
  const [searchTwo, setSearchTwo] = useState("");
  const [productsOne, setProductsOne] = useState<Product[]>([]);
  const [productsTwo, setProductsTwo] = useState<Product[]>([]);
  const [loadingOne, setLoadingOne] = useState(false);
  const [loadingTwo, setLoadingTwo] = useState(false);
  const [showResultsOne, setShowResultsOne] = useState(false);
  const [showResultsTwo, setShowResultsTwo] = useState(false);
  const searchRefOne = useRef<HTMLDivElement>(null);
  const searchRefTwo = useRef<HTMLDivElement>(null);
  return (
    <div className="bg-yellow-100 rounded-md p-4 flex flex-col justify-center items-center h-1/2">
      <div className="text-center">
        <h3 className="font-semibold">Compare Products</h3>
        <p className="text-sm">
          Choose Any Two Products to Review Side by Side
        </p>
      </div>
      <div className="space-y-2 w-full mt-2">
        {/* First product search */}
        <div className="relative w-full">
          <div className="w-full bg-tech_white px-3 py-1.5 rounded-md flex items-center justify-between">
            <input
              type="text"
              placeholder="Browse and select an Item"
              className="flex-1 outline-0 text-sm mr-2"
            />
            <Search size={18} />
          </div>
        </div>
        {/* Second product search */}
        <div className="relative w-full">
          <div className="w-full bg-tech_white px-3 py-1.5 rounded-md flex items-center justify-between">
            <input
              type="text"
              placeholder="Browse and select an Item"
              className="flex-1 outline-0 text-sm mr-2"
            />
            <Search size={18} />
          </div>
        </div>
        <button className="border rounded-sm w-full text-sm font-semibold py-1.5 transition-colors bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed">
          Compare Now
        </button>
      </div>
    </div>
  );
};

export default ProductComparison;
