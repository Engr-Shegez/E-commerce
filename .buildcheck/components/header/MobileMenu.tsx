import { AlignLeft } from "lucide-react";
import React from "react";

function MobileMenu() {
  return (
    <>
      <button className="hover:text-tech_bg_light_green hoverEffect lg:hidden">
        <AlignLeft />
      </button>
    </>
  );
}

export default MobileMenu;
