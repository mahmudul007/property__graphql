"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typedefs = void 0;
exports.typedefs = `#graphql
type Property {
          _id: String

         name: String
         bedrooms: Int
         bathrooms: Int
         property_type:[String]
         images: [Images]
         host: String
         manager: String
         cutt_off_time: String
         capacity_upper: Int
         capacity_lower: Int
         status: String       
        
         description: String
        
        address: [Address]
        subProperties: [SubProperty]
        }

    type Images {
        main_image: [MainImage]
    }
    type MainImage {
        url: MainImageUrl
    }
    type MainImageUrl {
        url: String
    }
    type Address {
        street: String
        city: String
        postal_code: String
        country: String
        zipcode: String
    }
type PropertyWithSubProperty {
    property: Property
    subProperties: [SubProperty]
    
}
    type Query {
      hello: String
      getAllProperties: [Property]
      getPropertyById(id: String): Property
      PropertyWithSubProperty(id: String ) : PropertyWithSubProperty 

    }
    type Mutation {
      createProperty(input: PropertyInput): Property 
      deleteProperty(id: String): Property
      updateProperty(id: String, input: PropertyUpdateInput): Property
    }
    
  input PropertyUpdateInput {
        name: String
        bedrooms: Int      
        property_type:[String]
        images: [InputImages]
        cutt_off_time: String
        capacity_upper: Int
        capacity_lower: Int
        status: String
        bathrooms: Int
        description: String     
        manager: String
        address: [InputAddress]
       
  }
    input PropertyInput {
        name: String
        bedrooms: Int    
        property_type:[String]
        images: [InputImages]
        cutt_off_time: String
        capacity_upper: Int
        capacity_lower: Int
        status: String
        bathrooms: Int
        description: String
        host: String
        manager: String
        address: [InputAddress]
       
       
    }
    input InputImages {
        main_image: [InputMainImage]
    }
    input InputMainImage {
        url: InputMainImageUrl
    }
    input InputMainImageUrl {
        url: String
    }
    input InputAddress {
        street: String
        city: String
        postal_code: String
        country: String
        zipcode: String
    }

  `;
