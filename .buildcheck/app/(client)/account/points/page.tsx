import FeatureCard from "@/components/pages/shared/FeatureCard";
import PageHero from "@/components/pages/shared/PageHero";
import { Progress } from "@/components/ui/progress";
import { BadgePercent, Gift, Medal } from "lucide-react";
import React from "react";

const rewardTiers = [
  {
    title: "Silver tier",
    description:
      "Entry-level perks with early notice on selected offers and product drops.",
    progress: 45,
  },
  {
    title: "Gold tier",
    description:
      "Unlock stronger promo access and priority support once your annual activity grows.",
    progress: 70,
  },
  {
    title: "Platinum tier",
    description:
      "Reserved for the most active shoppers with the highest reward multiplier.",
    progress: 28,
  },
];

const PointsPage = () => {
  return (
    <div className="space-y-5 py-5">
      <PageHero
        eyebrow="Tech Points"
        title="Turn account activity into store rewards"
        description="Your points dashboard keeps reward progress visible so you always know how close you are to the next tier or redemption."
      />

      <div className="grid gap-4 md:grid-cols-3">
        <FeatureCard
          title="Current balance"
          description="Points available for your next perk or account milestone."
          value="1,280 pts"
          icon={<Gift size={20} />}
        />
        <FeatureCard
          title="Next milestone"
          description="A few more purchases move this account closer to the next reward tier."
          value="220 pts"
          icon={<Medal size={20} />}
        />
        <FeatureCard
          title="Reward multiplier"
          description="Extra earning power applied to selected product campaigns and events."
          value="1.5x"
          icon={<BadgePercent size={20} />}
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {rewardTiers.map((tier) => (
          <div
            key={tier.title}
            className="rounded-3xl border bg-tech_bg_white p-6 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-tech_bg_dark">
              {tier.title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-tech_bg_light_color">
              {tier.description}
            </p>
            <div className="mt-5 space-y-2">
              <div className="flex items-center justify-between text-sm font-medium">
                <span>Progress</span>
                <span className="text-tech_bg_dark-red">{tier.progress}%</span>
              </div>
              <Progress
                value={tier.progress}
                className="[&_[data-slot=progress-indicator]]:bg-tech_bg_green"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PointsPage;
