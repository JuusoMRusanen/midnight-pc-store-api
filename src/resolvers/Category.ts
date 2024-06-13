import { Category } from "@prisma/client";
import { Context } from "src/types";

/**
 * Find and return products of category
 *
 * @param parent parent
 * @param _args args
 * @param context context
 * @returns products
 */
function products(parent: Category, _args: unknown, context: Context) {
  return context.prisma.category
    .findUnique({ where: { id: parent.id } })
    .products();
}

export default {
  products,
};
