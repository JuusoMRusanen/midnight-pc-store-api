import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Define resolvers
 */
const resolvers = {
  Query: {
    info: () => `This is the API of Midnight PC Store!`
  }
}

/**
 * Initialize Apollo server
 */
const server = new ApolloServer({
  typeDefs: fs.readFileSync(
    path.join(__dirname, './schema.graphql'),
    'utf8'
  ),
  resolvers,
})

/**
 * Start Apollo server
 */
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
