import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

interface Context {
  prisma: PrismaClient;
}

export const Mutation = {
  // Resolver for adding a product
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

  // Other mutation resolvers go here
};
