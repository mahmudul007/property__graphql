"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const property_1 = require("./property");
// const app = express();
// const httpserver = http.createServer(app);
const server = new server_1.ApolloServer({
    typeDefs: `
    ${property_1.Property.typeDefs}
    `,
    resolvers: {
        Query: Object.assign({}, property_1.Property.resolvers.Query),
        Mutation: Object.assign({}, property_1.Property.resolvers.Mutation),
    },
});
exports.default = server;
