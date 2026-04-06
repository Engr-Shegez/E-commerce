import Container from "@/components/common/Container";
import FeatureCard from "@/components/pages/shared/FeatureCard";
import PageHero from "@/components/pages/shared/PageHero";
import { Globe, ShieldCheck, Sparkles } from "lucide-react";
import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-tech_bg_color py-10">
      <Container className="space-y-6">
        <PageHero
          eyebrow="About NexBuy"
          title="A storefront built around modern gadget shopping"
          description="NexBuy brings together trending electronics, accessories, and everyday tech picks in a browsing experience that feels clean, fast, and easy to return to."
        />

        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            title="Curated catalog"
            description="The storefront leans into standout tech products instead of overwhelming shoppers with a cluttered browse."
            icon={<Sparkles size={20} />}
          />
          <FeatureCard
            title="Customer-first flow"
            description="From wishlist and compare to cart and account pages, the site is shaped around practical shopping follow-up."
            icon={<ShieldCheck size={20} />}
          />
          <FeatureCard
            title="Built to scale"
            description="Sanity-backed content and a structured Next.js app make it easier to grow product, blog, and support sections over time."
            icon={<Globe size={20} />}
          />
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;
