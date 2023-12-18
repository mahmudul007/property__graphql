export const typedefs = `#graphql
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
         sub_property: [SubProperty]
        adress: [Address]

}
type SubProperty {
  
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
      flat_duscount: Float
      percentage_discount: Float
      three_day: Float
      seven_day: Float
      fifteen_day: Float
      twenty_five_day: Float
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

    type Query {
      hello: String
      getAllProperties: [Property]
      getPropertyById(id: String): Property

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
        sub_property: [InputSubProperty]
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
        sub_property: [InputSubProperty]
       
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

    input InputSubProperty {
        name: String
        guest_capacity: [InputGuestCapacity]
        price: [InputPrice]
        amenities: [String]
        bathroom: Int
        safety_facilities: [String] 
        discount: [InputDiscount]
        description: String
        booked_dates: [InputBookedDates]
        room_images: [InputRoomImages]
    }
    input InputRoomImages {
        cover_images: [InputCoverImage]
        internal_images: [InputRoomInternalImages]
    }
    input InputRoomInternalImages {
        url: String
        name: String
    }
    input InputCoverImage {
        url: String
        name: String
    }
    input InputBookedDates { 
        last_update: String
        dates:String
    }
    input InputDiscount {
        flat_duscount: Float
        percentage_discount: Float
        three_day: Float
        seven_day: Float
        fifteen_day: Float
        twenty_five_day: Float
    }
    input InputGuestCapacity {
        adults: Int
        childs: Int
        infants: Int
        pets:Int
    }
    input InputPrice {
        base_price: Float
        child_price: Float
        security_fee: Float
        cleaning_fee: Float
        minimum_advance_payment: Float
        weekend_price: Float
        special_price: Float
    }

  `;
