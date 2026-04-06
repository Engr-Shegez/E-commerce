"use client";

import { Product } from "@/sanity.types";
import useCartStore from "@/Store";
import { Heart } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";

const FavoriteButton = ({
  showProduct = false,
  product,
}: {
  showProduct?: boolean;
  product: Product;
}) => {
  const favoriteProduct = useCartStore((state) => state.favoriteProduct);
  const addToFavorite = useCartStore((state) => state.addToFavorite);
  const isFavorite = favoriteProduct.some((item) => item._id === product._id);

  const handleToggleFavorite = async () => {
    await addToFavorite(product);
    toast.success(
      isFavorite
        ? `${product?.name?.substring(0, 18)} removed from wishlist`
        : `${product?.name?.substring(0, 18)} saved to wishlist`
    );
  };

  return (
    <button
      onClick={handleToggleFavorite}
      aria-label={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
      className="group relative rounded-sm border border-tech_bg_green/80 p-1.5 hover:bg-tech_bg_green/10 hover:text-tech_bg_orange hoverEffect"
    >
      <span className="sr-only">{showProduct ? product?.name : "Wishlist"}</span>
      <Heart
        fill={isFavorite ? "#f02757" : "#fff"}
        className={`mt-0.5 h-5 w-5 hoverEffect ${isFavorite ? "text-tech_bg_dark-red" : "text-tech_bg_green/80 group-hover:text-tech_bg_orange"}`}
      />
    </button>
  );
};

export default FavoriteButton;
