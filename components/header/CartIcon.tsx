import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import React from "react";

function CartIcon() {
  return (
    <Link
      href={"/cart"}
      className="flex items-center gap-2.5 justify-end group"
    >
      <span className="relative">
        <ShoppingBag className="text-tech_bg_light_green group-hover:text-tech_bg_white hoverEffect" />
        <span className="absolute -top-1 -right-1 bg-tech_bg_orange text-tech_bg_white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
          0
        </span>
      </span>
      <div className="hidden lg:flex flex-col">
        <h4 className="text-base font-bold text-tech_bg_orange group-hover:text-tech_bg_white">
          Cart
        </h4>
        <p className="text-x5 whitespace-nowrap capitalize">View Cart</p>
      </div>
    </Link>
  );
}

export default CartIcon;
