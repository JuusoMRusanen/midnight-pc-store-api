import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import Query from "./resolvers/Query";
import { Mutation } from "./resolvers/Mutation";
import { PrismaClient } from "@prisma/client";
import { Context } from "./types";
import Product from "./resolvers/Product";
import Image from "./resolvers/Image";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const prisma = new PrismaClient();

/**
 * Define resolvers
 */
const resolvers = {
  Query,
  Mutation,
  Product,
  Image,
};

/**
 * Initialize Apollo server
 */
const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, "./schema.graphql"), "utf8"),
  resolvers,
});

/**
 * Start Apollo server
 */
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async (): Promise<Context> => ({
    prisma,
  }),
});

console.log(`🚀  Server ready at: ${url}`);
