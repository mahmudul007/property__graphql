"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typedefs = void 0;
exports.typedefs = `#graphql


type SubProperty {
  _id: String
  property_id:String
  
  name: String
  guest_capacity: [GuestCapacity]
  price: [Price]
  amenities: [String]
  bathroom: Int
  safety_facilities: [String] 
  discount: [Discount]
  description: String
  booked_dates: [BookedDates]
  room_images: [RoomImages]
  property: Property

}
type RoomImages {
  cover_images: [CoverImage]
  internal_images: [RoomInternalImages]
}
type RoomInternalImages {
  url: String
  name: String
}

type CoverImage {
  url: String
  name: String
}
type BookedDates { 
      last_update: String
      dates:String
     }
    type Discount {
      flat_discount: Float
      percentage_discount: Float
      three_day: Float
      seven_day: Float
      fifteen_day: Float
    }
    type GuestCapacity {
      adults: Int
      childs: Int
      infants: Int
      pets:Int
    }
    type Price {
      base_price: Float
      child_price: Float
      security_fee: Float
      cleaning_fee: Float
      minimum_advance_payment: Float
      weekend_price: Float
      special_price: Float
    }
  type Query {
    hello: String!
    getAllSubProperty: [SubProperty]
    getSubPropertyById (id: String): SubProperty
  }

type Mutation {
    hello: String
    createSubProperty( input:SubPropertyInput ): SubProperty
    deleteSubPropertyById(id: String): SubProperty
    updateSubPropertyById(id: String, input:SubPropertyUpdate): SubProperty
}
input SubPropertyUpdate {
  name: String
  guest_capacity: [GuestCapacityInput]
  price: [PriceInput]
  amenities: [String]
  bathroom: Int
  safety_facilities: [String] 
  discount: [DiscountInput]
  description: String
  booked_dates: [BookedDatesInput]
  room_images: [RoomImagesInput]
}
input SubPropertyInput {
  property_id:String
  name: String
  guest_capacity: [GuestCapacityInput]
  price: [PriceInput]
  amenities: [String]
  bathroom: Int
  safety_facilities: [String] 
  discount: [DiscountInput]
  description: String
  booked_dates: [BookedDatesInput]
  room_images: [RoomImagesInput]

}
input RoomImagesInput {
  cover_images: [CoverImageInput]
  internal_images: [RoomInternalImagesInput]
}
input RoomInternalImagesInput {
  url: String
  name: String
}
input CoverImageInput {
  url: String
  name: String
}
input GuestCapacityInput {
  adults: Int
  childs: Int
  infants: Int
  pets:Int
}
input DiscountInput {
  flat_discount: Float
  percentage_discount: Float
  three_day: Float
  seven_day: Float
  fifteen_day: Float
}
input PriceInput {
  base_price: Float
  child_price: Float
  security_fee: Float
  cleaning_fee: Float
  minimum_advance_payment: Float
  weekend_price: Float
  special_price: Float
}
input BookedDatesInput {
  last_update: String
  dates:String
}


`;
