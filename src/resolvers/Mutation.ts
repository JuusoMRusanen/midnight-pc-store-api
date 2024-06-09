import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

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
   * @returns newUser
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
    const { input } = args;
    try {
      const newUser = await context.prisma.user.create({
        data: {
          name: input.name,
          email: input.email,
        },
      });
      return newUser;
    } catch (error) {
      throw new Error(`Failed to add user: ${error.message}`);
    }
  },

  /**
   * Resolver for adding a image
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
    const { input } = args;
    try {
      const newImage = await context.prisma.image.create({
        data: {
          url: input.url,
          productId: input.id,
        },
      });
      return newImage;
    } catch (error) {
      throw new Error(`Failed to add image: ${error.message}`);
    }
  },

  // Other mutation resolvers go here
};
