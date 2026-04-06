import React from "react";
import { motion } from "framer-motion";
import { emptyCart } from "@/images";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const Empty = () => {
  return (
    <div className="py-10 md:py-20 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full space-x-0.5"
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
          }}
          className="relative w-48 h-48 mx-auto"
        >
          <Image
            src={emptyCart}
            alt="Empty Shopping Cart"
            layout="fill"
            objectFit="contain"
            className="drop-shadow-lg"
          />
          <motion.div
            animate={{
              x: [0, -10, 10, 0],
              y: [0, -5, 5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "linear",
            }}
            className="absolute -top-4 -right-4 bg-green-500 rounded-full p-2"
          >
            <ShoppingCart size={24} className="text-white" />
          </motion.div>
        </motion.div>

        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 pt-5">
            Your Cart is feeling lonely
          </h2>
          <p>
            It looks like you have&apos;t added anything to your cart yet.
            Let&apos;s change that and find some amazing products for you!
          </p>
        </div>

        <div>
          <Link
            href="/"
            className="block bg-tech_bg_dark_color/5 border border-tech_bg_dark_color rounded-4xl text-center mt-5 hover:bg-tech_bg_dark_color hover:text-tech_bg_white p-2 font-semibold"
          >
            Discover Products
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Empty;
