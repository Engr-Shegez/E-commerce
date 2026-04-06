import Container from "@/components/common/Container";
import FeatureCard from "@/components/pages/shared/FeatureCard";
import PageHero from "@/components/pages/shared/PageHero";
import { FileCheck2, Scale, Shield } from "lucide-react";
import React from "react";

const sections = [
  {
    title: "Using the storefront",
    description:
      "Customers are expected to provide accurate checkout and account details so orders, support, and delivery updates remain reliable.",
  },
  {
    title: "Product and pricing updates",
    description:
      "Product availability, specifications, and offer pricing may change as catalog data evolves across the store and CMS.",
  },
  {
    title: "Order expectations",
    description:
      "Submitted orders are subject to payment confirmation, stock validation, and delivery review before fulfillment is finalized.",
  },
];

const TermsPage = () => {
  return (
    <div className="bg-tech_bg_color py-10">
      <Container className="space-y-6">
        <PageHero
          eyebrow="Terms & Conditions"
          title="The rules that support a smoother storefront experience"
          description="These sections give the terms page a clean structure and make it easier to expand later with the exact legal copy your project needs."
        />

        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            title="Transparent usage"
            description="Clear expectations help the store and customer flows stay predictable."
            icon={<Scale size={20} />}
          />
          <FeatureCard
            title="Purchase safeguards"
            description="Checkout and fulfillment depend on valid information and confirmed payment."
            icon={<FileCheck2 size={20} />}
          />
          <FeatureCard
            title="Policy coverage"
            description="The structure is ready for more precise legal detail whenever you want to expand it."
            icon={<Shield size={20} />}
          />
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {sections.map((section) => (
            <FeatureCard
              key={section.title}
              title={section.title}
              description={section.description}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TermsPage;
