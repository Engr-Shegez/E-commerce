import Container from "@/components/common/Container";
import BlogCard from "@/components/pages/blog/BlogCard";
import PageHero from "@/components/pages/shared/PageHero";
import { getAllBlogs, getBlogBySlug } from "@/sanity/queries";
import { urlFor } from "@/sanity/lib/image";
import { BlockContent, Blog, Blogcategory } from "@/sanity.types";
import dayjs from "dayjs";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

type BlogWithMeta = Blog & {
  authorName?: string;
  blogcategories?: Blogcategory[];
};

const getBodyParagraphs = (blocks: BlockContent | undefined) => {
  if (!blocks) return [];

  return blocks
    .map((block) => {
      if (block._type !== "block") return "";
      return block.children?.map((child) => child.text || "").join("").trim() || "";
    })
    .filter(Boolean);
};

const BlogDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const blog = (await getBlogBySlug(slug)) as BlogWithMeta | null;

  if (!blog) {
    notFound();
  }

  const relatedBlogs = ((await getAllBlogs()) as BlogWithMeta[])
    .filter((item: BlogWithMeta) => item._id !== blog._id)
    .slice(0, 3);
  const paragraphs = getBodyParagraphs(blog.body);

  return (
    <div className="bg-tech_bg_color py-10">
      <Container className="space-y-8">
        <PageHero
          eyebrow="Article"
          title={blog.title || "NexBuy story"}
          description={`Published ${dayjs(blog.publishedAt).format("MMMM D, YYYY")}${blog.authorName ? ` by ${blog.authorName}` : ""}.`}
        />

        {blog.mainImage ? (
          <div className="relative h-[320px] overflow-hidden rounded-3xl border bg-tech_bg_white shadow-sm md:h-[460px]">
            <Image
              src={urlFor(blog.mainImage).url()}
              alt={blog.title || "Blog cover"}
              fill
              className="object-cover"
            />
          </div>
        ) : null}

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border bg-tech_bg_white p-6 shadow-sm">
            <div className="mb-5 flex flex-wrap gap-3">
              {blog.blogcategories?.map(
                (category: Blogcategory & { _key?: string }) => (
                <span
                  key={category._id || category._key || category.title}
                  className="rounded-full bg-tech_bg_green/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-tech_bg_green"
                >
                  {category.title}
                </span>
                )
              )}
            </div>
            <div className="space-y-5 text-sm leading-7 text-tech_bg_light_color md:text-base">
              {paragraphs.length > 0 ? (
                paragraphs.map((paragraph, index) => (
                  <p key={`${blog._id}-${index}`}>{paragraph}</p>
                ))
              ) : (
                <p>
                  This article is published and linked correctly, but no rich
                  text body has been added yet.
                </p>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-tech_bg_dark">
              More from the blog
            </h2>
            {relatedBlogs.length > 0 ? (
              relatedBlogs.map((item) => <BlogCard key={item._id} blog={item} />)
            ) : (
              <div className="rounded-3xl border bg-tech_bg_white p-6 text-sm text-tech_bg_light_color shadow-sm">
                More posts will appear here as new articles are added.
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BlogDetailPage;
