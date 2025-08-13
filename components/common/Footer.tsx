import React from "react";
import FooterTop from "./FooterTop";
import Container from "./Container";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import { categoriesData, quickLinksData } from "../pages/constants/data";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-tech_bg_white border-t border hover:border-tech_bg_light_green ">
      <Container>
        <FooterTop />
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo className="w-40 mb-4" />
            <p className="text-tech_bg_light_color text-sm">
              Explore handpicked product collections at NexBuy, combining style
              and comfort to enhance your lifestyle.
            </p>
            <SocialMedia
              className="text-tech_bg_dark_color/60"
              iconClassName="border hover:border-tech_bg_light_green hover:text-tech_bg_green hover:border-tech_bg_dark_color/60"
              tooltipClassName="bg-tech_dark_color text-white"
            />
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinksData?.map((item) => (
                <li key={item?.title}>
                  <Link
                    href={item?.href}
                    className="text-gray-600 hover:text-tech_bg_green text-sm font-medium hoverEffect"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
            <ul className="space-y-3">
              {categoriesData.map((item) => (
                <li key={item?.title}>
                  <Link
                    href={`/category/${item?.href}`}
                    className="text-gray-600 hover:text-tech_bg_green text-sm font-medium hoverEffect capitalize"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">News Letter</h3>
            <p className="text-gray-600 text-sm mb-4">
              Suscribe to our newslatter to recieve updates and exclusive offers
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your Email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              <button
                type="submit"
                className="w-full bg-tech_bg_green text-white px-4 py-2 rounded-lg hover:bg-tech_bg_light_green transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="py-6 border-t text-center text-sm text-tech_bg_light_color">
          <Link href={""}>
            ©️ {new Date().getFullYear()}
            <span className="text-tech_bg_orange font-black tracking-wider uppercase hover:text-tech_bg_green hoverEffect group font-sans ">
              {" "}
              {""}Nex
            </span>
            <span className="text-tech_bg_green font-sans hover:text-tech_bg_orange hoverEffect">
              Buy
            </span>
            . All rights reserved
          </Link>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
