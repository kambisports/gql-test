import { ApolloServer } from "apollo-server";
import {resolvers} from './resolvers.js'
import {typeDefs} from './typeDefs.js'

const server = new ApolloServer({typeDefs: typeDefs, resolvers: resolvers})

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });