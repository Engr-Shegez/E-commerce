"use client";

import AddToCartButton from "@/components/common/AddToCartButton";
import Container from "@/components/common/Container";
import PriceView from "@/components/common/PriceView";
import { Button } from "@/components/ui/button";
import useCartStore from "@/Store";
import { image } from "@/sanity/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Heart, ShoppingBag, Trash2 } from "lucide-react";
import PageHero from "../shared/PageHero";

const WishlistPageClient = () => {
  const favoriteProduct = useCartStore((state) => state.favoriteProduct);
  const removeFromFavorite = useCartStore((state) => state.removeFromFavorite);

  return (
    <div className="bg-tech_bg_color py-10">
      <Container className="space-y-6">
        <PageHero
          eyebrow="Wishlist"
          title="Save products you want to come back to"
          description="Your wishlist keeps track of standout items while you compare options, wait for a discount, or plan your next order."
        >
          <div className="rounded-2xl border border-tech_bg_green/20 bg-tech_bg_white px-4 py-3 text-sm text-tech_bg_light_color">
            {favoriteProduct.length} saved item
            {favoriteProduct.length === 1 ? "" : "s"}
          </div>
        </PageHero>

        {favoriteProduct.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {favoriteProduct.map((product) => (
              <div
                key={product._id}
                className="overflow-hidden rounded-3xl border border-tech_bg_dark/10 bg-tech_bg_white shadow-sm"
              >
                <div className="relative border-b bg-neutral-100">
                  {product.images?.[0] ? (
                    <Link href={`/product/${product.slug?.current}`}>
                      <Image
                        src={image(product.images[0]).size(900, 900).url()}
                        alt={product.name || "Wishlist product"}
                        width={900}
                        height={900}
                        className="h-72 w-full object-contain p-6"
                      />
                    </Link>
                  ) : (
                    <div className="flex h-72 items-center justify-center p-6 text-sm text-tech_bg_light_color">
                      Image unavailable
                    </div>
                  )}
                  <button
                    onClick={() => removeFromFavorite(product._id)}
                    className="absolute right-4 top-4 rounded-full border border-tech_bg_dark/10 bg-tech_bg_white p-2 text-tech_bg_dark-red shadow-sm hover:bg-tech_bg_dark-red hover:text-tech_bg_white hoverEffect"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
                <div className="space-y-4 p-5">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-tech_bg_green">
                      {product.status || "Saved for later"}
                    </p>
                    <Link
                      href={`/product/${product.slug?.current}`}
                      className="line-clamp-2 text-lg font-semibold text-tech_bg_dark hover:text-tech_bg_dark-red hoverEffect"
                    >
                      {product.name}
                    </Link>
                    <p className="line-clamp-2 text-sm text-tech_bg_light_color">
                      {product.description ||
                        "A saved product from your NexBuy wishlist."}
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <PriceView
                      price={product.price}
                      discount={product.discount}
                      className="text-base"
                    />
                    <span className="rounded-full bg-tech_bg_green/10 px-3 py-1 text-xs font-semibold text-tech_bg_green">
                      {product.stock
                        ? `${product.stock} in stock`
                        : "Currently unavailable"}
                    </span>
                  </div>
                  <AddToCartButton product={product} className="rounded-full" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-tech_bg_green/30 bg-tech_bg_white px-6 py-12 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-tech_bg_green/10 text-tech_bg_green">
              <Heart size={28} />
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-tech_bg_dark">
              Your wishlist is still empty
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-tech_bg_light_color">
              Start saving products from the product detail page and they will
              show up here for quick access later.
            </p>
            <Button
              asChild
              className="mt-6 bg-tech_bg_green text-tech_bg_white hover:bg-tech_bg_orange"
            >
              <Link href="/shop">
                <ShoppingBag size={16} />
                Explore products
              </Link>
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default WishlistPageClient;
