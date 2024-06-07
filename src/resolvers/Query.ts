/**
 * Find and return a product by id
 *
 * @param parent parent
 * @param args arguments
 * @param context context
 * @returns product
 */
function product(parent, args, context) {
  return context.prisma.product.findUnique({ where: { id: args.id } });
}

/**
 * Find and return all products
 *
 * @param parent parent
 * @param args arguments
 * @param context context
 * @returns product
 */
function products(parent, args, context) {
  return context.prisma.product.findMany();
}

/**
 * Find and return all users
 *
 * @param parent parent
 * @param args arguments
 * @param context context
 * @returns users
 */
function users(parent, args, context) {
  return context.prisma.user.findMany();
}

export default { product, products, users };
