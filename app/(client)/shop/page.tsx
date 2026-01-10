import { getAllBrands, getCategories } from "@/sanity/queries";
import React from "react";
import Shop from "@/components/pages/Shop/Shop";

const ShopPage = async () => {
  const categories = await getCategories();
  const brands = await getAllBrands();
  return (
    <div className="bg-tech_bg_color pb-10">
      <Shop />
    </div>
  );
};

export default ShopPage;
