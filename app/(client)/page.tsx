import Banner from "@/components/pages/home/Banner";
import HomeCategories from "@/components/pages/home/HomeCategories";
import { getCategories } from "@/sanity/queries";

export default async function Home() {
  const categories = await getCategories();

  return (
    <div className="bg-tech_bg_color pt-5 pb-10">
      <Banner />
      <HomeCategories categories={categories} />
      {/* {HomeBanner} */}
      {/* {ProductsGrid} */}
      {/* {ShopByBrands} */}
      {/* LatestBlocks */}
    </div>
  );
}
