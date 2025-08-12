import React from "react";
import PriceFormatter from "./PriceFormatter";

interface Props {
  price: number | undefined;
  discount: number | undefined;
  className?: string;
}

function PriceView({ price, discount, className }: Props) {
  return (
    <div className="flex items-center gap-2">
      <PriceFormatter amount={price} className="text-tech_bg_dark_red" />
      {price && discount && (
        <PriceFormatter
          amount={price + (discount * price) / 100}
          className="line-through text-xs font-normal text-tech_bg_dark/70"
        />
      )}
    </div>
  );
}

export default PriceView;
