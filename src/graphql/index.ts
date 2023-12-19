// import http from "http";
import express from "express";
import { ApolloServer } from "@apollo/server";
import { Property } from "./property";
import { SubProperty } from "./subProperty";


// const app = express();
// const httpserver = http.createServer(app);

const server = new ApolloServer({
  typeDefs: `
    ${Property.typeDefs},
    ${SubProperty.typeDefs}
    `,

  resolvers: {
    Query: {
      ...Property.resolvers.Query,
      ...SubProperty.resolvers.Query,
    },
    Mutation: {
      ...Property.resolvers.Mutation,
      ...SubProperty.resolvers.Mutation,
    },
  },
});

export default server;
