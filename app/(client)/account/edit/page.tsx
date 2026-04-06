import FeatureCard from "@/components/pages/shared/FeatureCard";
import PageHero from "@/components/pages/shared/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { currentUser } from "@clerk/nextjs/server";
import { BellRing, ShieldCheck, UserRoundPen } from "lucide-react";
import React from "react";

export const dynamic = "force-dynamic";

const EditProfilePage = async () => {
  const user = await currentUser();

  return (
    <div className="space-y-5 py-5">
      <PageHero
        eyebrow="Profile"
        title="Keep your customer details current"
        description="Update the personal details that appear across your orders, saved preferences, and support conversations."
      />

      <div className="grid gap-5 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="rounded-3xl border bg-tech_bg_white p-6 shadow-sm">
          <div className="mb-5 space-y-1">
            <h2 className="text-xl font-semibold text-tech_bg_dark">
              Account details
            </h2>
            <p className="text-sm text-tech_bg_light_color">
              This form is ready for your profile workflow and already reflects
              the current signed-in customer details.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">First name</Label>
              <Input id="firstName" defaultValue={user?.firstName ?? ""} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last name</Label>
              <Input id="lastName" defaultValue={user?.lastName ?? ""} />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                defaultValue={user?.primaryEmailAddress?.emailAddress ?? ""}
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="phone">Phone number</Label>
              <Input
                id="phone"
                defaultValue={user?.primaryPhoneNumber?.phoneNumber ?? ""}
                placeholder="+1 564 6578 567"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="bio">Shopping preferences</Label>
              <Textarea
                id="bio"
                defaultValue="I like quick updates about delivery, discounts on electronics, and restock notifications on saved products."
                className="min-h-28"
              />
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button className="bg-tech_bg_green text-tech_bg_white hover:bg-tech_bg_orange">
              Save changes
            </Button>
            <Button variant="outline">Reset form</Button>
          </div>
        </div>

        <div className="space-y-4">
          <FeatureCard
            title="Notification control"
            description="Keep delivery updates, stock alerts, and promotional mailers aligned with how often you want to hear from NexBuy."
            icon={<BellRing size={20} />}
            value="Active"
          />
          <FeatureCard
            title="Profile visibility"
            description="Your current details are visible only to checkout, support, and account workflows tied to your sign-in session."
            icon={<ShieldCheck size={20} />}
            value="Private"
          />
          <FeatureCard
            title="Personal branding"
            description="Use a complete profile so invoices, delivery updates, and account recovery all stay clear and consistent."
            icon={<UserRoundPen size={20} />}
          />
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
