import { Product } from "@/sanity.types";
import { Heart } from "lucide-react";
import React from "react";

const FavoriteButton = ({
  showProduct = false,
  product,
}: {
  showProduct?: boolean;
  product: Product;
}) => {
  return (
    <>
      <button className="group relative hover:text-tech_bg_orange hover:bg-tech_bg_green/10 hoverEffect border border-tech_bg_green/80 p-1.5 rounded-sm">
        <Heart
          fill="#fff"
          className="text-tech_bg_green/80 hoverEffect mt-0.5 w-5 h-5 group-hover:text-tech_bg_orange"
        />
      </button>
    </>
  );
};

export default FavoriteButton;
