import FeatureCard from "@/components/pages/shared/FeatureCard";
import PageHero from "@/components/pages/shared/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ClipboardList, PackageSearch, Send } from "lucide-react";
import React from "react";

const QuotePage = () => {
  return (
    <div className="space-y-5 py-5">
      <PageHero
        eyebrow="Quote"
        title="Request a custom product quote"
        description="Use this space to ask for pricing on bulk orders, specialized bundles, or products you want the team to source for you."
      />

      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border bg-tech_bg_white p-6 shadow-sm">
          <div className="mb-5 space-y-1">
            <h2 className="text-xl font-semibold text-tech_bg_dark">
              Quote details
            </h2>
            <p className="text-sm text-tech_bg_light_color">
              Share the essentials and the support team can turn this into a
              full quote flow.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="quote-name">Full name</Label>
              <Input id="quote-name" placeholder="Enter your full name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="quote-email">Email address</Label>
              <Input id="quote-email" placeholder="Enter your email" />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="quote-products">Products needed</Label>
              <Input
                id="quote-products"
                placeholder="Example: 10 gaming headsets, 5 smart watches"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="quote-message">Project notes</Label>
              <Textarea
                id="quote-message"
                className="min-h-32"
                placeholder="Tell us about your quantity, delivery timeline, preferred brands, or budget range."
              />
            </div>
          </div>
          <Button className="mt-6 bg-tech_bg_green text-tech_bg_white hover:bg-tech_bg_orange">
            <Send size={16} />
            Submit quote request
          </Button>
        </div>

        <div className="space-y-4">
          <FeatureCard
            title="Bulk order support"
            description="Ideal for company orders, gifting batches, or repeated procurement with a shared product list."
            icon={<ClipboardList size={20} />}
          />
          <FeatureCard
            title="Sourcing assistance"
            description="If a model is not live on the storefront, this page gives you a place to ask for it directly."
            icon={<PackageSearch size={20} />}
          />
        </div>
      </div>
    </div>
  );
};

export default QuotePage;
