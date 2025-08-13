import Container from "@/components/common/Container";
import Title from "@/components/common/Title";
import { urlFor } from "@/sanity/lib/image";
import { getRecentlyPublished } from "@/sanity/queries";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import dayjs from "dayjs";

const RecentlyPublished = async () => {
  const blogs = await getRecentlyPublished();
  return (
    <Container className="mt-10 lg:mt-20 bg-tech_bg_white p-5 lg:p-7 rounded-md">
      <div className="flex items-center gap-5 justify-between mb-10">
        <Title>Recently Published</Title>
        <Link
          href={"/blog"}
          className="text-sm font-semibold tracking-wide hover:text-tech_bg_dark-red hoverEffect"
        >
          View all
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2.5 mt-5">
        {blogs?.map((blog: Blog) => (
          <div
            key={blog?._id}
            className="group rounded-md overflow-hidden border border-tech_bg_light_green/20 hover:border-tech_bg_light_green"
          >
            <div className="w-full h-64 overflow-hidden">
              {blog?.mainImage && (
                <Link href={`/blog/${blog?.slug?.current}`}>
                  <Image
                    src={urlFor(blog?.mainImage).url()}
                    alt="blogImage"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 hoverEffect "
                  />
                </Link>
              )}
            </div>
            <div className="p-5">
              <div className="textt-xs flex items-center gap-5">
                <div className="flex items-center relative">
                  {blog?.blogcategories?.map((item, index) => (
                    <p
                      key={index}
                      className="font-semibold text-shadow-tech_bg_dark tracking-wide"
                    >
                      {item?.title}
                    </p>
                  ))}
                  <span className="absolute left-0 -bottom-1.5 bg-tech_bg_green/30 inline-block w-full h-[2px] group-hover:bg-tech_bg_green hover:cursor-pointer hoverEffect" />
                </div>
                <p className="flex items-center gap-1 text-tech_bg_light_color relative">
                  <Calendar size={15} />{" "}
                  {dayjs(blog?.publishedAt).format("MMMM D,YYYY")}
                  <span className="absolute left-0 -bottom-1.5 bg-tech_bg_green/30 inline-block w-full h-[2px] group-hover:bg-tech_bg_green hover:cursor-pointer hoverEffect" />
                </p>
              </div>
              <Link
                href={`/blog/${blog?.slug?.current}`}
                className="text-base font-bold tracking-wide mt-5 line-clamp-2 hover:text-tech_bg_green hoverEffect"
              >
                {blog?.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default RecentlyPublished;
