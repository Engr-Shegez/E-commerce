import ProductGrid from "@/components/common/ProductGrid";
import Banner from "@/components/pages/home/Banner";
import HomeCategories from "@/components/pages/home/HomeCategories";
import { getCategories } from "@/sanity/queries";
import ExploreBrands from "@/components/pages/home/ExploreBrands";
import RecentlyPublished from "@/components/pages/home/RecentlyPublished";

export default async function Home() {
  const categories = await getCategories();

  return (
    <div className="bg-tech_bg_color pt-5 pb-10">
      <Banner />
      <HomeCategories categories={categories} />
      <div className="py-10">
        <ProductGrid />
        <ExploreBrands />
        <RecentlyPublished />
      </div>
    </div>
  );
}
