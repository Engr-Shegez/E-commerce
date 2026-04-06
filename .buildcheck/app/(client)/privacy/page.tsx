import Container from "@/components/common/Container";
import FeatureCard from "@/components/pages/shared/FeatureCard";
import PageHero from "@/components/pages/shared/PageHero";
import { EyeOff, Lock, UserRoundCheck } from "lucide-react";
import React from "react";

const PrivacyPage = () => {
  return (
    <div className="bg-tech_bg_color py-10">
      <Container className="space-y-6">
        <PageHero
          eyebrow="Privacy"
          title="A privacy page that fits the rest of the storefront"
          description="This route explains how account and shopping information is handled while keeping the same polished look as the rest of the app."
        />

        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            title="Customer data"
            description="Profile and checkout details are used to support ordering, delivery, and account management."
            icon={<UserRoundCheck size={20} />}
          />
          <FeatureCard
            title="Protected access"
            description="Authentication and account-only routes are already part of the current app structure."
            icon={<Lock size={20} />}
          />
          <FeatureCard
            title="Respectful visibility"
            description="Personal details are not surfaced publicly and should remain limited to the workflows that need them."
            icon={<EyeOff size={20} />}
          />
        </div>
      </Container>
    </div>
  );
};

export default PrivacyPage;
