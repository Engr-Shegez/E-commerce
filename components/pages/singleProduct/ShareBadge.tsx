"use client";
import React from "react";
import { FaPinterest } from "react-icons/fa";
import { MdAddToPhotos } from "react-icons/md";
import { RiMessengerFill, RiWhatsappFill } from "react-icons/ri";

const ShareBadge = ({ product }: { product?: Product }) => {
  const handleCompare = () => {
    if (!product?.slug?.current) {
      alert("Product  slug is missing");
    }
    // NAVIGATE TO COMPARISON PAGE WITH SELECTED PRODUCT
    window.location.href = `/compare?product=${product?.slug?.current}`;
  };

  return (
    <div className="border border-tech_bg_dark/10 py-3 px-6 mb-5 rounded-full flex items-center justify-between shadow-sm shadow-tech_bg_dark_color/10">
      <div className="flex items-center gap-1.5">
        <p className="text-sm font-semibold">Share:</p>
        <div className="flex items-center gap-1 text-base">
          <RiMessengerFill />
          <FaPinterest />
          <RiWhatsappFill />
        </div>
      </div>
      <div>
        <button
          onClick={handleCompare}
          className="flex items-center gap-1.5 hover:text-tech_bg_orange"
        >
          <MdAddToPhotos />
          <p>Add to compare</p>
        </button>
      </div>
    </div>
  );
};

export default ShareBadge;
