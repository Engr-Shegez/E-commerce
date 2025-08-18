import Container from "@/components/common/Container";
import ImageView from "@/components/pages/singleProduct/imageView";
import ShareBadge from "@/components/pages/singleProduct/ShareBadge";
import { Product } from "@/sanity.types";
// import { Product } from "@/sanity.types";
import { getProductBySlug } from "@/sanity/queries";
import { notFound } from "next/navigation";
import React from "react";

const SingleProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const product: Product = await getProductBySlug(slug);

  if (!product) {
    return notFound();
  }

  return (
    <div className="bg-tech_bg_white py-10">
      <Container>
        <ShareBadge product={product} />
        <div className="flex flex-col md:flex-row gap-5">
          {product?.images && (
            <ImageView images={product?.images} isStock={product?.stock} />
          )}
          <div className="w-full md:w-3/5">details</div>
        </div>
      </Container>
    </div>
  );
};

export default SingleProductPage;
