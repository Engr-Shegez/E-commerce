import React from "react";
import Link from "next/link";
import { accountMenuItems } from "@/components/pages/account/accountMenuData";
import PageHero from "@/components/pages/shared/PageHero";

const AccountPage = () => {
  return (
    <div className="space-y-5 bg-tech_bg_white py-5">
      <PageHero
        eyebrow="My Account"
        title="Keep your NexBuy profile organized"
        description="Manage your orders, saved addresses, wishlist, and account preferences from one clean dashboard."
      />
      <div className="grid frid-cols-3 gap-3 md:grid-cols-4">
        {accountMenuItems?.map((item, index) => (
          <Link
            key={index}
            href={item?.href}
            className="rounded-2xl border bg-tech_bg_white p-4 shadow-sm hover:border-tech_bg_green hover:bg-tech_bg_color/70 md:p-10"
          >
            <span className="inline-block rounded-full bg-tech_bg_blue/20 p-3 text-lg text-tech_bg_blue">
              {item?.icon}
            </span>
            <p className="mt-3 text-center text-xs font-semibold md:text-sm">
              {item?.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AccountPage;
