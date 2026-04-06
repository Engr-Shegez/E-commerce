import React from "react";
import PriceFormatter from "./PriceFormatter";
import { cn } from "@/lib/utils";

interface Props {
  price: number | undefined;
  discount: number | undefined;
  className?: string;
}

function PriceView({ price, discount, className }: Props) {
  return (
    <div className="flex items-center gap-2">
      <PriceFormatter
        amount={price}
        className={cn("text-tech_bg_dark-red", className)}
      />
      {price && discount && (
        <PriceFormatter
          amount={price + (discount * price) / 100}
          className={cn(
            "line-through font-normal text-tech_bg_dark/70",
            className
          )}
        />
      )}
    </div>
  );
}

export default PriceView;
