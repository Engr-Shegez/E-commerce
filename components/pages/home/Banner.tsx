import Container from "@/components/common/Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { urlFor } from "@/sanity/lib/image";
import { getBanner } from "@/sanity/queries";
import Image from "next/image";
import React from "react";
import ProductComparison from "@/components/pages/home/ProductComparison";
import { smallBanner } from "@/images";

const Banner = async () => {
  const banner = await getBanner();

  return (
    <Container className="grid grid-cols-1 lg:grid-cols-4 gap-4 mg:gap-5">
      <div className="w-full lg:col-span-3">
        <Carousel className="relative w-full rounded-md overflow-hidden">
          <CarouselContent>
            {banner?.map((item, index) => (
              <CarouselItem key={index}>
                <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
                  {item?.image && (
                    <img
                      src={urlFor(item?.image).url()}
                      alt={`Banner ${index + 1}`}
                      className="object-cover"
                      priority={index === 0}
                    />
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
      <div className="hidden lg:flex flex-col gap-5 h-full">
        <ProductComparison />
        <div className="relative rounded-md overflow-hidden h-1/2">
          <Image
            src={smallBanner}
            alt="SmallBanner"
            sizes="(max-width: 768) 100vw, 25vw"
            priority
            fill
            className="object-cover rounded-md"
          />
        </div>
      </div>
    </Container>
  );
};

export default Banner;
