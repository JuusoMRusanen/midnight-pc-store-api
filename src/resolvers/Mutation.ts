import { Prisma, PrismaClient } from "@prisma/client";

interface Context {
  prisma: PrismaClient;
}

export const Mutation = {
  /**
   * Resolver for adding a product
   *
   * @param _parent parent
   * @param args arguments
   * @param context context
   * @returns newProduct
   */
  addProduct: async (
    _parent: any,
    args: { input: Prisma.ProductCreateInput },
    context: Context
  ) => {
    const { input } = args;
    try {
      const newProduct = await context.prisma.product.create({
        data: {
          name: input.name,
          description: input.description,
          price: input.price,
          stock: input.stock,
          images: input.images,
        },
      });
      return newProduct;
    } catch (error) {
      throw new Error(`Failed to add product: ${error.message}`);
    }
  },

  /**
   * Resolver for updating a product
   *
   * @param _parent parent
   * @param args arguments
   * @param context context
   * @returns updatedProduct
   */
  updateProduct: async (
    _parent: any,
    args: { id: string; input: Prisma.ProductUpdateInput },
    context: Context
  ) => {
    const updatedProduct = await context.prisma.product.update({
      where: { id: args.id },
      data: args.input,
    });
    return updatedProduct;
  },

  /**
   * Resolver for deleting a product
   *
   * @param _parent parent
   * @param args arguments
   * @param context context
   * @returns boolean indicating success
   */
  deleteProduct: async (
    _parent: any,
    args: { id: string },
    context: Context
  ) => {
    await context.prisma.product.delete({
      where: { id: args.id },
    });
    return true;
  },

  /**
   * Resolver for adding a category
   *
   * @param _parent parent
   * @param args arguments
   * @param context context
   * @returns newCategory
   */
  addCategory: async (
    _parent: any,
    args: { input: Prisma.CategoryCreateInput },
    context: Context
  ) => {
    const newCategory = await context.prisma.category.create({
      data: args.input,
    });
    return newCategory;
  },

  /**
   * Resolver for updating a category
   *
   * @param _parent parent
   * @param args arguments
   * @param context context
   * @returns updatedCategory
   */
  updateCategory: async (
    _parent: any,
    args: { id: string; input: Prisma.CategoryUpdateInput },
    context: Context
  ) => {
    const updatedCategory = await context.prisma.category.update({
      where: { id: args.id },
      data: args.input,
    });
    return updatedCategory;
  },

  /**
   * Resolver for deleting a category
   *
   * @param _parent parent
   * @param args arguments
   * @param context context
   * @returns boolean indicating success
   */
  deleteCategory: async (
    _parent: any,
    args: { id: string },
    context: Context
  ) => {
    await context.prisma.category.delete({
      where: { id: args.id },
    });
    return true;
  },

  /**
   * Resolver for adding an order
   *
   * @param _parent parent
   * @param args arguments
   * @param context context
   * @returns newOrder
   */
  addOrder: async (
    _parent: any,
    args: { input: Prisma.OrderCreateInput },
    context: Context
  ) => {
    const newOrder = await context.prisma.order.create({
      data: args.input,
    });
    return newOrder;
  },

  /**
   * Resolver for updating an order
   *
   * @param _parent parent
   * @param args arguments
   * @param context context
   * @returns updatedOrder
   */
  updateOrder: async (
    _parent: any,
    args: { id: string; input: Prisma.OrderUpdateInput },
    context: Context
  ) => {
    const updatedOrder = await context.prisma.order.update({
      where: { id: args.id },
      data: args.input,
    });
    return updatedOrder;
  },

  /**
   * Resolver for deleting an order
   *
   * @param _parent parent
   * @param args arguments
   * @param context context
   * @returns boolean indicating success
   */
  deleteOrder: async (_parent: any, args: { id: string }, context: Context) => {
    await context.prisma.order.delete({
      where: { id: args.id },
    });
    return true;
  },

  /**
   * Resolver for adding a user
   *
   * @param _parent parent
   * @param args arguments
   * @param context context
   * @returns newUser
   */
  addUser: async (
    _parent: any,
    args: { input: Prisma.UserCreateInput },
    context: Context
  ) => {
    const newUser = await context.prisma.user.create({
      data: args.input,
    });
    return newUser;
  },

  /**
   * Resolver for updating a user
   *
   * @param _parent parent
   * @param args arguments
   * @param context context
   * @returns updatedUser
   */
  updateUser: async (
    _parent: any,
    args: { id: string; input: Prisma.UserUpdateInput },
    context: Context
  ) => {
    const updatedUser = await context.prisma.user.update({
      where: { id: args.id },
      data: args.input,
    });
    return updatedUser;
  },

  /**
   * Resolver for deleting a user
   *
   * @param _parent parent
   * @param args arguments
   * @param context context
   * @returns boolean indicating success
   */
  deleteUser: async (_parent: any, args: { id: string }, context: Context) => {
    await context.prisma.user.delete({
      where: { id: args.id },
    });
    return true;
  },

  /**
   * Resolver for adding an image
   *
   * @param _parent parent
   * @param args arguments
   * @param context context
   * @returns newImage
   */
  addImage: async (
    _parent: any,
    args: { input: Prisma.ImageCreateInput },
    context: Context
  ) => {
    const newImage = await context.prisma.image.create({
      data: args.input,
    });
    return newImage;
  },
};
