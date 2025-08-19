import { Product } from "@/sanity.types";
import React from "react";
import { Button } from "../ui/button";
import { HiMinus, HiPlus } from "react-icons/hi2";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";
import useCartStore from "@/Store";

interface Props {
  product: Product;
  className?: string;
  borderStyle?: string;
}

const QuantityButton = ({ product, className, borderStyle }: Props) => {
  const { addItem, removeItem, getItemCount } = useCartStore();
  const itemCount = getItemCount(product?._id);
  const isOutOfStock = product?.stock === 0;

  const handleRemoveProduct = () => {
    removeItem(product?._id);
    if (itemCount > 1) {
      toast.success("Quantity Decreased Successfully");
    } else {
      toast.success(`${product?.name?.substring(0, 12)} removed successfully!`);
    }
  };

  const handleAddToCart = () => {
    if ((product?.stock as number) > itemCount) {
      addItem(product);
      toast.success("Quantity Increased Successfully!");
    } else {
      toast.error("Can not add more than available stock");
    }
  };

  return (
    <div
      className={
        (cn("flex items-center gap-1 text-base"), borderStyle, className)
      }
    >
      <Button
        onClick={handleRemoveProduct}
        variant={"outline"}
        size={"icon"}
        className="w-6 h-6 border-0 hover:bg-tech_bg_green/20 hoverEffect"
      >
        <HiMinus />
      </Button>

      <span className="font-semibold text-md w-6 text-center text-tech_bg_dark m-1 ">
        {itemCount}
      </span>
      <Button
        onClick={handleAddToCart}
        disabled={isOutOfStock}
        variant={"outline"}
        size={"icon"}
        className="w-6 h-6 border-none hover:bg-tech_bg_green/20 hoverEffect"
      >
        <HiPlus />
      </Button>
    </div>
  );
};

export default QuantityButton;
