import { Category, Image, Product, User } from "@prisma/client";
import { Context, QueryProduct } from "src/types";

/**
 * Define resolvers for Query root type
 */
export const Query = {
  /**
   * Find and return a product by id
   *
   * @param _parent _parent
   * @param args arguments
   * @param context context
   * @returns product
   */
  product: async (_parent: Product, args: QueryProduct, context: Context) => {
    return await context.prisma.product.findUnique({ where: { id: args.id } });
  },

  /**
   * Find and return all products
   *
   * @param _parent _parent
   * @param _args arguments
   * @param context context
   * @returns products
   */
  products: async (_parent: Product, _args: unknown, context: Context) => {
    return await context.prisma.product.findMany();
  },

  /**
   * Find and return all users
   *
   * @param _parent _parent
   * @param _args arguments
   * @param context context
   * @returns users
   */
  users: async (_parent: User, _args: unknown, context: Context) => {
    return await context.prisma.user.findMany();
  },

  /**
   * Find and return all images
   *
   * @param _parent _parent
   * @param _args arguments
   * @param context context
   * @returns images
   */
  images: async (_parent: Image, _args: unknown, context: Context) => {
    return await context.prisma.image.findMany();
  },

  /**
   * Find and return all categories
   *
   * @param _parent _parent
   * @param _args arguments
   * @param context context
   * @returns categories
   */
  categories: async (_parent: Category, _args: unknown, context: Context) => {
    return await context.prisma.category.findMany();
  },
};
