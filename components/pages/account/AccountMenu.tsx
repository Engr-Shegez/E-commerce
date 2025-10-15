"use client";

import React from "react";
import {
  FaClipboardList,
  FaRegHeart,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import { IoBookmarks } from "react-icons/io5";
import { IoMdBookmarks } from "react-icons/io";
import { MdStars } from "react-icons/md";
import { FaCirclePlus } from "react-icons/fa6";
import { PiCurrencyDollarSimpleFill } from "react-icons/pi";
import { usePathname, useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { cn } from "@/lib/utils";

const accountsMenu = [
  { title: "Orders", icon: <IoBookmarks />, href: "/account/orders" },
  { title: "Cart", icon: <FaShoppingCart />, href: "/cart" },
  { title: "Edit Profile", icon: <FaUser />, href: "/account/edit" },
  { title: "Addresses", icon: <IoMdBookmarks />, href: "/account/addresses" },
  { title: "WishList", icon: <FaRegHeart />, href: "/wishlist" },
  {
    title: "Your Transactions",
    icon: <PiCurrencyDollarSimpleFill />,
    href: "/account/transactions",
  },
  { title: "Tech Points", icon: <MdStars />, href: "/account/points" },
  { title: "Quote", icon: <FaClipboardList />, href: "/account/quote" },
  { title: "Add +", icon: <FaCirclePlus />, href: "/account/add" },
  { title: "Add +", icon: <FaCirclePlus />, href: "/account/add" },
];

const AccountMenu = () => {
  const pathname = usePathname();
  const router = useRouter();
  //   if (pathname === "/account/account") return null;
  const currentPage = accountsMenu.find((item) => item.href === pathname);

  const handleSelectChange = (value: string) => {
    router.push(value);
  };

  return (
    <div className="border-b pb-2">
      {/* Mobile and Medium Screen - select */}
      <div className="lg:hidden">
        <Select
          defaultValue={
            pathname && accountsMenu.some((item) => item.href === pathname)
              ? pathname
              : ""
          }
          onValueChange={handleSelectChange}
        >
          <SelectTrigger className="w-full hover:cursor-pointer">
            <SelectValue placeholder="Select menu item">
              {currentPage && (
                <div className="flex items-center gap-2">
                  <span className="text-tech_bg_dark-red text-lg">
                    {currentPage?.icon}
                  </span>
                  <span className="text-sm font-semibold text-tech_bg_dark-red">
                    {currentPage?.title}
                  </span>
                </div>
              )}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {accountsMenu?.map((item, index) => (
              <SelectItem
                key={index}
                value={item?.href}
                className="hover:cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      "text-lg",
                      item.href === pathname
                        ? "text-tech_bg_dark-red"
                        : "text-tech_bg_dark/50"
                    )}
                  >
                    {item.icon}
                  </span>
                  <span
                    className={cn(
                      "text-sm font-semibold",
                      item.href === pathname ? "text-tech_bg_dark-red" : ""
                    )}
                  >
                    {item.title}
                  </span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Large screens - original Menu */}
      <div className="hidden lg:flex lg:flex-wrap lg:items-center lg:gap-5">
        {accountsMenu?.map((item, index) => (
          <Link
            key={index}
            href={item?.href}
            className="flex items-center gap-2 group"
          >
            <span
              className={cn(
                "text-lg hoverEffect",
                item?.href === pathname
                  ? "text-tech_bg_dark-red"
                  : "text-tech_bg_dark/50 group-hover:text-tech_bg_dark-red"
              )}
            >
              {item?.icon}
            </span>
            <span
              className={cn(
                "text-sm font-semibold hoverEffect",
                item?.href === pathname
                  ? "text-tech_bg_dark-red"
                  : "text-tech_bg_dark/50 group-hover:text-tech_bg_dark-red"
              )}
            >
              {item?.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AccountMenu;
