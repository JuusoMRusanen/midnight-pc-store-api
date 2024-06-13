import { Product } from "@prisma/client";
import { Context } from "src/types";

/**
 * Find and return category of product
 *
 * @param parent parent
 * @param _args args
 * @param context context
 * @returns category
 */
function category(parent: Product, _args: unknown, context: Context) {
  return context.prisma.product
    .findUnique({ where: { id: parent.id } })
    .category();
}

/**
 * Find and return images of product
 *
 * @param parent parent
 * @param _args args
 * @param context context
 * @returns images
 */
function images(parent: Product, _args: unknown, context: Context) {
  return context.prisma.product
    .findUnique({ where: { id: parent.id } })
    .images();
}

export default {
  category,
  images,
};
