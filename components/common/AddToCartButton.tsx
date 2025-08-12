import { cn } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";
import React from "react";

interface Props {
  product: Product;
  className?: string;
}

const AddToCartButton = ({ product, className }: Props) => {
  return (
    <button
      className={cn(
        "w-full py-2 px-4 bg-tech_bg_green rounded flex items-center justify-center hover:bg-tech_bg_orange/90 hoverEffect",
        className
      )}
    >
      <ShoppingCart size={16} className="mr-2" /> Add to Cart
    </button>
  );
};

export default AddToCartButton;
