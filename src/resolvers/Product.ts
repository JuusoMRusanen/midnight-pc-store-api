import { Context } from "src/types";

/**
 * Find and return category of product
 *
 * @param parent parent
 * @param _args args
 * @param context context
 * @returns category
 */
// function category(parent: any, _args: any, context: Context) {
//   return context.prisma.product
//     .findUnique({ where: { id: parent.id } })
//     .category();
// }

/**
 * Find and return images of product
 *
 * @param parent parent
 * @param _args args
 * @param context context
 * @returns images
 */
function images(parent: any, _args: any, context: Context) {
  return context.prisma.product
    .findUnique({ where: { id: parent.id } })
    .images();
}

module.exports = {
  // category,
  images,
};
