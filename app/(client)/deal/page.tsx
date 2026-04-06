import Container from "@/components/common/Container";
import ProductCard from "@/components/common/ProductCard";
import FeatureCard from "@/components/pages/shared/FeatureCard";
import PageHero from "@/components/pages/shared/PageHero";
import { getAllProducts } from "@/sanity/queries";
import { Product } from "@/sanity.types";
import { BadgePercent, Flame, Zap } from "lucide-react";
import React from "react";

const DealPage = async () => {
  const products = await getAllProducts();
  const dealProducts = products
    .filter((product: Product) => (product.discount ?? 0) > 0)
    .slice(0, 10);

  return (
    <div className="bg-tech_bg_color py-10">
      <Container className="space-y-6">
        <PageHero
          eyebrow="Deal Zone"
          title="Special offers worth checking before they move"
          description="This page gives the header deal badge a real destination and highlights discounted products in the same visual language as the storefront."
        />

        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            title="Discount-ready picks"
            description="Products shown here already carry pricing momentum and deserve a dedicated landing page."
            icon={<BadgePercent size={20} />}
          />
          <FeatureCard
            title="Fast-moving stock"
            description="A focused deal page helps shoppers scan sale items without jumping through the full catalog."
            icon={<Flame size={20} />}
          />
          <FeatureCard
            title="Promo-friendly"
            description="The route is ready for future campaign banners, countdowns, and curated bundles."
            icon={<Zap size={20} />}
          />
        </div>

        {dealProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-2.5 md:grid-cols-3 lg:grid-cols-5">
            {dealProducts.map((product: Product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed bg-tech_bg_white p-8 text-center text-sm text-tech_bg_light_color shadow-sm">
            No discounted products are available right now, but the deal page is
            ready for future offer campaigns.
          </div>
        )}
      </Container>
    </div>
  );
};

export default DealPage;
