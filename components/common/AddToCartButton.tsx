"use client";
import { cn } from "@/lib/utils";
import useCartStore from "@/Store";
import { ShoppingCart } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";
import QuantityButton from "./QuantityButton";
import PriceFormatter from "./PriceFormatter";

interface Props {
  product: Product;
  className?: string;
}

const AddToCartButton = ({ product, className }: Props) => {
  const { addItem, getItemCount } = useCartStore();
  const itemCount = getItemCount(product?._id);
  const isOutOfStock = product?.stock === 0;
  const handleAddToCart = () => {
    if ((product?.stock as number) > itemCount) {
      addItem(product);
      toast.success(
        `${product?.name?.substring(0, 12)}... added successfully!`
      );
    } else {
      toast.error("Can not add more than available stock");
    }
  };

  return (
    <div className="w-full flex items-center h-12">
      {itemCount ? (
        <div className="text-sm w-full">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold">Quantity</span>
            <QuantityButton product={product} />
          </div>
          <div className="flex items-center justify-between border-t pt-1">
            <span className="text-xs font-semibold">SubTotal</span>
            <PriceFormatter
              amount={product?.price ? product?.price * itemCount : 0}
            />
          </div>
        </div>
      ) : (
        <button
          onClick={handleAddToCart}
          disabled={isOutOfStock}
          className={cn(
            "w-full py-2 px-4 bg-tech_bg_green rounded flex items-center justify-center hover:bg-tech_bg_orange/90 hoverEffect disabled:bg-tech_bg_orange/50 ",
            className
          )}
        >
          <ShoppingCart size={16} className="mr-2" /> Add to Cart
        </button>
      )}
    </div>
  );
};

export default AddToCartButton;
