import { User, User2 } from "lucide-react";
import Link from "next/link";
import React from "react";
// import {
//   // ClerkProvider,
//   // SignInButton,
//   // SignUpButton,
//   SignedIn,
//   // SignedOut,
//   // UserButton,
// } from "@clerk/nextjs";

function Account() {
  return (
    <div>
      <Link
        href={"/account/account"}
        className="flex items-center gap-2.5 justify-end group"
      >
        <User2 className="text-tech_bg_light_green group-hover:text-tech_bg_white hoverEffect" />
        <div className="hidden lg:flex flex-col">
          <h4 className="text-base font-bold text-tech_bg_orange group-hover:text-tech_bg_white">
            Account
          </h4>
          <p className="text-x5 whitespace-nowrap">Login / Register</p>
        </div>
      </Link>
      {/* <User className="lg:hidden lg:text-tech_bg_light_green w-6 h-6 hover:text-tech_bg_orange lg:group-hover:text-tech_white hoverEffect" /> */}
    </div>
  );
}

export default Account;
