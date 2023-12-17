"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const server_1 = require("@apollo/server");
const property_1 = require("./property");
const app = (0, express_1.default)();
const httpserver = http_1.default.createServer(app);
const server = new server_1.ApolloServer({
    typeDefs: `
    ${property_1.Property.typeDefs}
    `,
    resolvers: {
        Query: Object.assign({}, property_1.Property.resolvers.Query),
    },
});
exports.default = server;
