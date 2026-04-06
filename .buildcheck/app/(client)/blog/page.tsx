import Container from "@/components/common/Container";
import BlogCard from "@/components/pages/blog/BlogCard";
import FeatureCard from "@/components/pages/shared/FeatureCard";
import PageHero from "@/components/pages/shared/PageHero";
import { getAllBlogs } from "@/sanity/queries";
import { Blog, Blogcategory } from "@/sanity.types";
import { BookOpenText, Newspaper, PenSquare } from "lucide-react";
import React from "react";

type BlogWithMeta = Blog & {
  authorName?: string;
  blogcategories?: Blogcategory[];
};

const BlogPage = async () => {
  const blogs = (await getAllBlogs()) as BlogWithMeta[];

  return (
    <div className="bg-tech_bg_color py-10">
      <Container className="space-y-6">
        <PageHero
          eyebrow="Blog"
          title="Stories, guides, and fresh product context"
          description="The blog now has a full landing page behind the home section links, ready for editorial updates from Sanity."
        />

        <div className="grid gap-4 md:grid-cols-3">
          <FeatureCard
            title="Product insight"
            description="Give shoppers more context than a product card alone can provide."
            icon={<BookOpenText size={20} />}
          />
          <FeatureCard
            title="Fresh content"
            description="Recent posts from Sanity now have a real destination instead of dead links."
            icon={<Newspaper size={20} />}
          />
          <FeatureCard
            title="Editorial ready"
            description="The route can grow into category pages, authors, and richer article layouts over time."
            icon={<PenSquare size={20} />}
          />
        </div>

        {blogs.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {blogs.map((blog: BlogWithMeta) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed bg-tech_bg_white p-8 text-center text-sm text-tech_bg_light_color shadow-sm">
            No blog posts are available yet, but the route is now in place for
            the homepage links and future content publishing.
          </div>
        )}
      </Container>
    </div>
  );
};

export default BlogPage;
