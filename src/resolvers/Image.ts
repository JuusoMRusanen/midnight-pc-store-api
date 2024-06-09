import { Context } from "src/types";

/**
 * Find and return product of image
 *
 * @param parent parent
 * @param _args args
 * @param context context
 * @returns product
 */
function product(parent: any, _args: any, context: Context) {
  return context.prisma.image
    .findUnique({ where: { id: parent.id } })
    .product();
}

export default {
  product,
};
