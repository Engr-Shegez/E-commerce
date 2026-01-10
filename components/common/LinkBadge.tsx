"use client";
import { usePathname } from "next/navigation";
import React, { Fragment } from "react";
import Container from "./Container";
import Link from "next/link";
import { Home } from "lucide-react";

const LinkBadge = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);
  // For account routes, show the special account breadcrumb

  if (pathname.includes("/account/")) {
    const lastSegment = pathSegments[pathSegments.length - 1];

    return (
      <div className="bg-tech_bg_white py-5">
        <Container className="flex items-center gap-2 text-sm">
          <Link
            href="/account/account"
            className="hover:text-tech_bg_dark-red hoverEffect"
          >
            <Home size={17} />
          </Link>
          <span>/</span>
          <Link
            href={"/account/account"}
            className={`${lastSegment === "account" ? "text-tech_bg_orange" : ""} hover:text-tech_bg_dark_red hoverEffect`}
          >
            Account
          </Link>
          {lastSegment !== "account" && (
            <>
              <span>/</span>
              <span className="text-tech_bg_dark-red capitalize">
                {lastSegment}
              </span>
            </>
          )}
        </Container>
      </div>
    );
  }

  if (pathSegments?.length > 0) {
    return (
      <div className="bg-tech_bg_white py-5">
        <Container className="flex items-center gap-2 text-sm">
          <Link href={"/"} className="hover:text-tech_bg_dark-red hoverEffect">
            <Home size={17} />
          </Link>
          {pathSegments?.map((segment, index) => (
            <Fragment key={index}>
              <span>/</span>
              {index === pathSegments?.length - 1 ? (
                <span className="text-tech_bg_dark-red capitalize">
                  {segment}
                </span>
              ) : (
                <Link
                  href={`/${pathSegments.slice(0, index + 1).join("/")}`}
                  className="hover:text-tech_bg_dark-red hoverEffect capitalize"
                >
                  {segment}
                </Link>
              )}
            </Fragment>
          ))}
        </Container>
      </div>
    );
  }
};

export default LinkBadge;
