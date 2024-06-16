import { Category, Image, Order, Product, User } from "@prisma/client";
import { Context, QueryOrder, QueryProduct, QueryUser } from "src/types";

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
   * Find and return order
   *
   * @param _parent _parent
   * @param args arguments
   * @param context context
   * @returns order
   */
  order: async (_parent: Order, args: QueryOrder, context: Context) => {
    return await context.prisma.order.findUnique({ where: { id: args.id } });
  },

  /**
   * Find and return all orders
   *
   * @param _parent _parent
   * @param _args arguments
   * @param context context
   * @returns orders
   */
  orders: async (_parent: Order, _args: unknown, context: Context) => {
    return await context.prisma.order.findMany();
  },

  /**
   * Find and return all orders
   *
   * @param _parent _parent
   * @param _args arguments
   * @param context context
   * @returns orders
   */
  orderProducts: async (_parent: Order, _args: unknown, context: Context) => {
    return await context.prisma.orderProduct.findMany();
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
   * Find and return user
   *
   * @param _parent _parent
   * @param args arguments
   * @param context context
   * @returns user
   */
  user: async (_parent: User, args: QueryUser, context: Context) => {
    return await context.prisma.user.findUnique({ where: { id: args.id } });
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
