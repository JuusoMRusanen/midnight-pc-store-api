import { Category, Image, Product, User } from "@prisma/client";
import { Context, QueryProduct } from "src/types";

/**
 * Find and return a product by id
 *
 * @param _parent _parent
 * @param args arguments
 * @param context context
 * @returns product
 */
function product(__parent: Product, args: QueryProduct, context: Context) {
  return context.prisma.product.findUnique({ where: { id: args.id } });
}

/**
 * Find and return all products
 *
 * @param _parent _parent
 * @param _args arguments
 * @param context context
 * @returns product
 */
function products(_parent: Product, _args: unknown, context: Context) {
  return context.prisma.product.findMany();
}

/**
 * Find and return all users
 *
 * @param _parent _parent
 * @param _args arguments
 * @param context context
 * @returns users
 */
function users(_parent: User, _args: unknown, context: Context) {
  return context.prisma.user.findMany();
}

/**
 * Find and return all images
 *
 * @param _parent _parent
 * @param _args arguments
 * @param context context
 * @returns images
 */
function images(_parent: Image, _args: unknown, context: Context) {
  return context.prisma.image.findMany();
}

/**
 * Find and return all categories
 *
 * @param _parent _parent
 * @param _args arguments
 * @param context context
 * @returns categories
 */
function categories(_parent: Category, _args: unknown, context: Context) {
  return context.prisma.category.findMany();
}

export default { product, products, users, images, categories };
