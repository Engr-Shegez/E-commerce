"use client";

import {
  AlignLeft,
  CircleHelp,
  Gift,
  Heart,
  Home,
  LayoutGrid,
  PackageCheck,
  ShoppingBag,
  User2,
  Zap,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import useCartStore from "@/Store";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { categoriesData, quickLinksData } from "../pages/constants/data";

const featuredLinks = [
  { title: "Home", href: "/", icon: Home },
  { title: "Shop Latest Offers", href: "/shop", icon: Gift },
  { title: "TV Deals", href: "/deal", icon: Zap },
  { title: "Wishlist", href: "/wishlist", icon: Heart },
];

const accountLinks = [
  { title: "My Account", href: "/account/account", icon: User2 },
  { title: "Orders", href: "/account/orders", icon: PackageCheck },
  { title: "Cart", href: "/cart", icon: ShoppingBag },
  { title: "Help Center", href: "/help", icon: CircleHelp },
];

const menuLinkClass =
  "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-tech_bg_dark hover:bg-tech_bg_color hover:text-tech_bg_green hoverEffect";

function MobileMenu() {
  const { items } = useCartStore();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className="hover:text-tech_bg_light_green hoverEffect lg:hidden"
        >
          <AlignLeft />
        </button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[86vw] max-w-sm gap-0 overflow-y-auto border-tech_bg_green/20 bg-white p-0 text-tech_bg_dark [&>button]:text-white"
      >
        <div className="bg-tech_bg_dark px-5 py-5 text-white">
          <p className="text-xs font-semibold uppercase tracking-wide text-tech_bg_lighter_green">
            NexBuy menu
          </p>
          <h2 className="mt-1 text-xl font-bold">Browse faster</h2>
          <p className="mt-1 text-sm text-white/70">
            Jump into deals, categories, orders, and support.
          </p>
        </div>

        <nav className="px-4 py-5">
          <div className="space-y-1">
            {featuredLinks.map((item) => {
              const Icon = item.icon;

              return (
                <SheetClose asChild key={item.title}>
                  <Link href={item.href} className={menuLinkClass}>
                    <Icon className="h-5 w-5 text-tech_bg_green" />
                    <span>{item.title}</span>
                  </Link>
                </SheetClose>
              );
            })}
          </div>

          <div className="my-5 h-px bg-tech_bg_dark/10" />

          <div>
            <div className="mb-2 flex items-center gap-2 px-3 text-xs font-bold uppercase tracking-wide text-tech_bg_light_color">
              <LayoutGrid className="h-4 w-4" />
              Categories
            </div>
            <div className="grid grid-cols-1 gap-1">
              {categoriesData.map((item) => (
                <SheetClose asChild key={item.title}>
                  <Link
                    href={`/category/${item.href}`}
                    className="rounded-md px-3 py-2 text-sm font-medium capitalize text-tech_bg_dark hover:bg-tech_bg_color hover:text-tech_bg_green hoverEffect"
                  >
                    {item.title}
                  </Link>
                </SheetClose>
              ))}
            </div>
          </div>

          <div className="my-5 h-px bg-tech_bg_dark/10" />

          <div className="space-y-1">
            {accountLinks.map((item) => {
              const Icon = item.icon;
              const cartCount = item.href === "/cart" ? items?.length || 0 : null;

              return (
                <SheetClose asChild key={item.title}>
                  <Link href={item.href} className={menuLinkClass}>
                    <Icon className="h-5 w-5 text-tech_bg_green" />
                    <span className="flex-1">{item.title}</span>
                    {cartCount !== null && (
                      <span className="rounded-full bg-tech_bg_orange px-2 py-0.5 text-xs font-bold text-white">
                        {cartCount}
                      </span>
                    )}
                  </Link>
                </SheetClose>
              );
            })}
          </div>
        </nav>

        <div className="mt-auto border-t bg-tech_bg_color px-4 py-4">
          <div className="grid grid-cols-2 gap-2">
            {quickLinksData.slice(0, 4).map((item) => (
              <SheetClose asChild key={item.title}>
                <Link
                  href={item.href}
                  className="rounded-md bg-white px-3 py-2 text-center text-xs font-semibold text-tech_bg_light_color hover:text-tech_bg_green hoverEffect"
                >
                  {item.title}
                </Link>
              </SheetClose>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileMenu;
