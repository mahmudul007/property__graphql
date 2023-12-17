export const typedefs = `#graphql
type Property {

    _id: ID!
    
    }

    type Query {
      hello: String
      getAllProperties: [Property]

    }
  `;
