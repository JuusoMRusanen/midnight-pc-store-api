import { Image } from "@prisma/client";
import { Context } from "src/types";

/**
 * Find and return product of image
 *
 * @param parent parent
 * @param _args args
 * @param context context
 * @returns product
 */
function product(parent: Image, _args: unknown, context: Context) {
  return context.prisma.image
    .findUnique({ where: { id: parent.id } })
    .product();
}

export default {
  product,
};
