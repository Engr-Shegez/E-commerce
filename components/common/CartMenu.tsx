"use client";
import { BarChart2, Heart, ShoppingCart, X } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const CartMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const items = 6;
  const favoriteProduct = 3;
  const cartCount = 2;
  const wishlistCount = 6;

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-2 mb-2"
          >
            <Link href={"/cart"} onClick={handleClick}>
              <div className="bg-tech_bg_dark text-tech_bg_white p-3 rounded-full shadow-lg hover:bg-tech_bg_green hoverEffect group">
                <ShoppingCart size={20} />
                {cartCount && (
                  <span className="absolute -top-1 -right-1 bg-tech_bg_dark text-tech_bg_white text-xs w-5 h-5 flex justify-center rounded-full group-hover:bg-tech_bg_green hoverEffect">
                    {cartCount}
                  </span>
                )}
              </div>
            </Link>

            <Link href={"/wishlist"} onClick={handleClick}>
              <div className="bg-tech_bg_dark text-tech_bg_white p-3 rounded-full shadow-lg hover:bg-tech_bg_green hoverEffect group">
                <Heart size={20} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-tech_bg_dark text-tech_bg_white text-xs w-5 h-5 flex justify-center rounded-full group-hover:bg-tech_bg_green hoverEffect">
                    {wishlistCount}
                  </span>
                )}
              </div>
            </Link>

            <Link href={"/compare"} onClick={handleClick}>
              <div className="bg-tech_bg_dark text-tech_bg_white p-3 rounded-full shadow-lg hover:bg-tech_bg_green hoverEffect group">
                <BarChart2 size={20} />
                {cartCount && (
                  <span className="absolute -top-1 -right-1 bg-tech_bg_dark text-tech_bg_white text-xs w-5 h-5 flex justify-center rounded-full group-hover:bg-tech_bg_green hoverEffect">
                    {cartCount}
                  </span>
                )}
              </div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-tech_bg_green text-tech_bg_white p-3 rounded-full shadow-lg hover:bg-tech_bg_dark hoverEffect group"
      >
        {isOpen ? (
          <X size={20} />
        ) : (
          <>
            <ShoppingCart size={20} />
            {cartCount && (
              <span className="absolute -top-1 -right-1 bg-tech_bg_dark text-tech_bg_white text-xs w-5 h-5 flex justify-center rounded-full group-hover:bg-tech_bg_green hoverEffect">
                {cartCount}
              </span>
            )}
          </>
        )}
      </button>
    </div>
  );
};

export default CartMenu;
