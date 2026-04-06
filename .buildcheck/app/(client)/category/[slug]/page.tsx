import Container from "@/components/common/Container";
import ProductCard from "@/components/common/ProductCard";
import PageHero from "@/components/pages/shared/PageHero";
import { Button } from "@/components/ui/button";
import { getCategoryBySlug, getProductsByCategorySlug } from "@/sanity/queries";
import { Product } from "@/sanity.types";
import Link from "next/link";
import React from "react";

const fallbackCopy: Record<string, { title: string; description: string }> = {
  mobiles: {
    title: "Mobiles",
    description: "Browse a focused entry point for mobile-first devices and accessories.",
  },
  appliances: {
    title: "Appliances",
    description: "Explore appliance-friendly picks in the same clean storefront flow.",
  },
  smartphones: {
    title: "Smartphones",
    description: "A dedicated page for smartphone shoppers who want a quicker route than the full catalog.",
  },
  "air-conditioners": {
    title: "Air Conditioners",
    description: "A category landing page prepared for larger home comfort products and related accessories.",
  },
  "washing-machine": {
    title: "Washing Machine",
    description: "Use this page as the home for laundry-related product curation and future filtering.",
  },
  "kitchen-appliances": {
    title: "Kitchen Appliances",
    description: "A landing area for connected kitchen gear and home tech essentials.",
  },
  "gadget-accessories": {
    title: "Gadget Accessories",
    description: "Small but essential accessories now have a route instead of a dead footer link.",
  },
};

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
  const products = await getProductsByCategorySlug(slug);
  const fallback = fallbackCopy[slug];
  const title =
    category?.title ||
    fallback?.title ||
    slug
      .split("-")
      .map((segment) => segment[0]?.toUpperCase() + segment.slice(1))
      .join(" ");
  const description =
    category?.description ||
    fallback?.description ||
    "This category route is now live and ready to host matching products as the catalog grows.";

  return (
    <div className="bg-tech_bg_color py-10">
      <Container className="space-y-6">
        <PageHero
          eyebrow="Category"
          title={title}
          description={description}
        >
          <Button
            asChild
            className="bg-tech_bg_green text-tech_bg_white hover:bg-tech_bg_orange"
          >
            <Link href="/shop">Browse all products</Link>
          </Button>
        </PageHero>

        {products.length > 0 ? (
          <div className="grid grid-cols-2 gap-2.5 md:grid-cols-3 lg:grid-cols-5">
            {products.map((product: Product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed bg-tech_bg_white p-8 text-center text-sm text-tech_bg_light_color shadow-sm">
            There are no products mapped to this category yet, but the footer
            destination is now in place and ready for catalog growth.
          </div>
        )}
      </Container>
    </div>
  );
};

export default CategoryPage;
