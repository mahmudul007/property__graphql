import http from "http";
import express from "express";
import { ApolloServer } from "@apollo/server";
import { Property } from "./property";


const app = express();
const httpserver = http.createServer(app);

const server = new ApolloServer({
  typeDefs: `
    ${Property.typeDefs}
    `,

  resolvers: {
    Query: {
      ...Property.resolvers.Query,
    },
  },
});

export default server;
