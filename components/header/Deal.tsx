import { Zap } from "lucide-react";
import Link from "next/link";
import React from "react";

function Deal() {
  return (
    <Link
      href={"/deal"}
      className="hidden lg:flex items-center gap-2.5 justify-end group"
    >
      <Zap className="text-tech_bg_light_green group-hover:text-tech_bg_white hoverEffect" />
      <div className="flex flex-col">
        <h4 className="text-base font-bold text-tech_bg_orange group-hover:text-tech_bg_white">
          Tv Deal
        </h4>
        <p className="text-x5 whitespace-nowrap">Special Offers</p>
      </div>
    </Link>
  );
}

export default Deal;
