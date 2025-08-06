import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const BannerType = defineType({
  name: "Banner",
  title: "Banner",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "name",
      title: "Banner Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "name",
      },
    }),
    defineField({
      name: "description",
      title: "Sale Description",
      type: "text",
    }),
    defineField({
      name: "badge",
      title: "Discount Badge",
      type: "string",
      description: "Discount Badge Ratio",
    }),
    defineField({
      name: "discountAmount",
      title: "Discount Amount",
      type: "number",
      description: "Amount off in percentage or Fixed",
    }),
    defineField({
      name: "image",
      title: "Product Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
    prepare(select) {
      const { title, media } = select;
      return {
        title,
        media,
      };
    },
  },
});
