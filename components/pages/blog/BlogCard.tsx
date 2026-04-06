import { urlFor } from "@/sanity/lib/image";
import { Blog, Blogcategory } from "@/sanity.types";
import dayjs from "dayjs";
import { CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type BlogWithMeta = Blog & {
  authorName?: string;
  blogcategories?: Blogcategory[];
};

const BlogCard = ({ blog }: { blog: BlogWithMeta }) => {
  return (
    <article className="overflow-hidden rounded-3xl border border-tech_bg_dark/10 bg-tech_bg_white shadow-sm">
      <div className="relative h-64 overflow-hidden bg-neutral-100">
        {blog.mainImage ? (
          <Link href={`/blog/${blog.slug?.current}`}>
            <Image
              src={urlFor(blog.mainImage).url()}
              alt={blog.title || "Blog post"}
              fill
              className="object-cover"
            />
          </Link>
        ) : null}
      </div>
      <div className="space-y-4 p-5">
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-tech_bg_green">
          {blog.blogcategories
            ?.slice(0, 2)
            .map((category: Blogcategory & { _key?: string }) => (
            <span key={category._id || category.title}>{category.title}</span>
            ))}
        </div>
        <div className="space-y-2">
          <Link
            href={`/blog/${blog.slug?.current}`}
            className="line-clamp-2 text-xl font-semibold text-tech_bg_dark hover:text-tech_bg_dark-red hoverEffect"
          >
            {blog.title}
          </Link>
          <div className="flex flex-wrap items-center gap-3 text-sm text-tech_bg_light_color">
            <span className="flex items-center gap-1">
              <CalendarDays size={14} />
              {dayjs(blog.publishedAt).format("MMMM D, YYYY")}
            </span>
            {blog.authorName ? <span>By {blog.authorName}</span> : null}
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
