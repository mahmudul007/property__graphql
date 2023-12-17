"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typedefs = void 0;
exports.typedefs = `#graphql
type Property {

    _id: ID!
    
    }

    type Query {
      hello: String
      getAllProperties: [Property]

    }
  `;
