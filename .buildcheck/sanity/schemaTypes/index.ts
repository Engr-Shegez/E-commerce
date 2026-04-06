import { type SchemaTypeDefinition } from "sanity";
import { BannerType } from "./BannerType";
import { addressType } from "./addressType";
import { authorType } from "./authorType";
import { blockContentType } from "./blockContentType";
import { blogCategoryType } from "./blogCategoryType";
import { blogType } from "./blogType";
import { brandType } from "./brandTypes";
import { categoryType } from "./categoryType";
import { orderType } from "./orderType";
import { productType } from "./productType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    productType,
    categoryType,
    BannerType,
    brandType,
    addressType,
    orderType,
    blogType,
    blogCategoryType,
    authorType,
    blockContentType,
  ],
};
