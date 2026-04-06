import FeatureCard from "@/components/pages/shared/FeatureCard";
import PageHero from "@/components/pages/shared/PageHero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Address } from "@/sanity.types";
import { client } from "@/sanity/lib/client";
import { MapPin, PackageCheck, Plus } from "lucide-react";
import React from "react";

const AddressPage = async () => {
  const addresses = await client.fetch<Address[]>(
    `*[_type == "address"] | order(_createdAt desc)`
  );

  return (
    <div className="space-y-5 py-5">
      <PageHero
        eyebrow="Addresses"
        title="Keep delivery locations ready for checkout"
        description="Saved addresses make repeat orders faster and help you avoid re-entering the same delivery details every time."
      >
        <Button className="bg-tech_bg_green text-tech_bg_white hover:bg-tech_bg_orange">
          <Plus size={16} />
          Add address
        </Button>
      </PageHero>

      <div className="grid gap-4 md:grid-cols-3">
        <FeatureCard
          title="Saved addresses"
          description="A clean address book helps checkout stay quick and accurate."
          value={String(addresses?.length ?? 0)}
          icon={<MapPin size={20} />}
        />
        <FeatureCard
          title="Default delivery"
          description="Your preferred address is highlighted so the cart can pick it up first."
          value={addresses?.some((item) => item.default) ? "Ready" : "Set one"}
          icon={<PackageCheck size={20} />}
        />
        <FeatureCard
          title="Coverage"
          description="Store multiple home, office, or gifting locations without losing the current theme and account flow."
          value="Flexible"
          icon={<MapPin size={20} />}
        />
      </div>

      {addresses?.length ? (
        <div className="grid gap-4 md:grid-cols-2">
          {addresses.map((address) => (
            <div
              key={address._id}
              className="rounded-3xl border bg-tech_bg_white p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-tech_bg_dark">
                    {address.name}
                  </h2>
                  <p className="mt-1 text-sm text-tech_bg_light_color">
                    {address.email}
                  </p>
                </div>
                {address.default ? (
                  <Badge className="bg-tech_bg_green text-tech_bg_white hover:bg-tech_bg_green">
                    Default
                  </Badge>
                ) : null}
              </div>
              <div className="mt-4 space-y-1 text-sm text-tech_bg_light_color">
                <p>{address.address}</p>
                <p>
                  {address.city}, {address.state} {address.zip}
                </p>
              </div>
              <div className="mt-5 flex gap-3">
                <Button variant="outline">Edit</Button>
                <Button variant="outline">Use for next order</Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed bg-tech_bg_white p-8 text-center text-sm text-tech_bg_light_color shadow-sm">
          No saved addresses yet. Add one here and it will be ready inside the
          cart checkout flow.
        </div>
      )}
    </div>
  );
};

export default AddressPage;
