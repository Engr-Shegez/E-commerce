import React from "react";

interface Props {
  price: number | undefined;
  discount: number | undefined;
  className?: string;
}

function PriceView({ price, discount, className }: Props) {
  return (
    <div>
      <div>{/* <PriceFormatter /> */}</div>
    </div>
  );
}

export default PriceView;
