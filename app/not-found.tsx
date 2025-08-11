import GoBack from "@/components/common/GoBack";
import Logo from "@/components/common/Logo";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="bg-tech_bg_white relative ">
      <GoBack />
      <div className="h-full min-h-screen flex flex-col items-center justify-center px-4 ">
        <div className="max-w-md mx-auto">
          <div className="text-center">
            <Logo className="w-80 mx-auto" />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Need help locating something?
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              The page you requested could not be found. Please check the URL
              and try again.
            </p>
          </div>
          <div className="mt-8 space-y-6 ">
            <div className="rounded:md shadow-xs space-y-4">
              <Link
                href={"/"}
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm rounded-md text-white bg-tech_orange bg-tech_bg_green/80 hover:bg-tech_bg_green font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                Visit NexBuy&apos;s Main Page
              </Link>
              <Link
                href="/help"
                className="w-full flex items center justify-center px-4 py-2 border border-gray-300 text-sm font-semibold rounded-md text-amazonBlue bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                Help
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Need help? Visit the {""}
              <Link
                href="/help"
                className="font-medium text-amazon-blue hover:text-black"
              >
                Help section {""}
              </Link>
              Or {""}
              <Link
                href="/contact"
                className="font-medium text-black hover:text-stone-950"
              >
                Contact Us
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
