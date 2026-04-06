import FeatureCard from "@/components/pages/shared/FeatureCard";
import PageHero from "@/components/pages/shared/PageHero";
import { Button } from "@/components/ui/button";
import {
  Bolt,
  CirclePlus,
  MapPin,
  ScrollText,
  UserRoundPen,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const quickActions = [
  {
    title: "Add a new address",
    description: "Drop in another delivery destination before your next cart checkout.",
    href: "/account/addresses",
    icon: <MapPin size={20} />,
  },
  {
    title: "Update profile details",
    description: "Refresh your name, email, and shopping preferences without leaving the account area.",
    href: "/account/edit",
    icon: <UserRoundPen size={20} />,
  },
  {
    title: "Start a custom quote",
    description: "Open a product request when you need a more tailored pricing conversation.",
    href: "/account/quote",
    icon: <ScrollText size={20} />,
  },
];

const QuickAddPage = () => {
  return (
    <div className="space-y-5 py-5">
      <PageHero
        eyebrow="Quick Add"
        title="Jump straight into the next account action"
        description="This page groups the most common follow-up actions so you can move quickly without hunting through the rest of the account menu."
      >
        <div className="rounded-2xl border border-tech_bg_orange/20 bg-tech_bg_white px-4 py-3 text-sm text-tech_bg_light_color">
          Fast access panel
        </div>
      </PageHero>

      <div className="grid gap-4 md:grid-cols-3">
        {quickActions.map((item) => (
          <FeatureCard
            key={item.title}
            title={item.title}
            description={item.description}
            icon={item.icon}
          >
            <Button
              asChild
              variant="outline"
              className="mt-2 border-tech_bg_green text-tech_bg_green hover:bg-tech_bg_green hover:text-tech_bg_white"
            >
              <Link href={item.href}>
                <CirclePlus size={16} />
                Open
              </Link>
            </Button>
          </FeatureCard>
        ))}
      </div>

      <FeatureCard
        title="Built for follow-up tasks"
        description="As more account actions are added later, this space can stay your quick-entry hub for creating or updating anything tied to your customer profile."
        icon={<Bolt size={20} />}
      />
    </div>
  );
};

export default QuickAddPage;
