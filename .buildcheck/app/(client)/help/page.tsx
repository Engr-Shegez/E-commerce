import Container from "@/components/common/Container";
import FeatureCard from "@/components/pages/shared/FeatureCard";
import PageHero from "@/components/pages/shared/PageHero";
import { CircleHelp, PackageSearch, RotateCcw, ShieldCheck } from "lucide-react";
import React from "react";

const HelpPage = () => {
  return (
    <div className="bg-tech_bg_color py-10">
      <Container className="space-y-6">
        <PageHero
          eyebrow="Help"
          title="Find support topics faster"
          description="This support hub gives customers a clear place to start when they need help with delivery, returns, payments, or product selection."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <FeatureCard
            title="Order support"
            description="Track purchases, understand delivery updates, and review payment status."
            icon={<PackageSearch size={20} />}
          />
          <FeatureCard
            title="Returns"
            description="Get clarity on return expectations and support follow-up steps."
            icon={<RotateCcw size={20} />}
          />
          <FeatureCard
            title="Account safety"
            description="Manage profile visibility and understand how your data is handled."
            icon={<ShieldCheck size={20} />}
          />
          <FeatureCard
            title="Common questions"
            description="Jump to FAQ-style answers without leaving the storefront flow."
            icon={<CircleHelp size={20} />}
          />
        </div>
      </Container>
    </div>
  );
};

export default HelpPage;
