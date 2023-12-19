"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const property_1 = require("./property");
const subProperty_1 = require("./subProperty");
// const app = express();
// const httpserver = http.createServer(app);
const server = new server_1.ApolloServer({
    typeDefs: `
    ${property_1.Property.typeDefs},
    ${subProperty_1.SubProperty.typeDefs}
    `,
    resolvers: {
        Query: Object.assign(Object.assign({}, property_1.Property.resolvers.Query), subProperty_1.SubProperty.resolvers.Query),
        Mutation: Object.assign(Object.assign({}, property_1.Property.resolvers.Mutation), subProperty_1.SubProperty.resolvers.Mutation),
    },
});
exports.default = server;
