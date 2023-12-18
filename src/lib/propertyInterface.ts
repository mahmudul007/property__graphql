import mongoose,{ Document } from "mongoose";

export interface Ipoperty extends Document {
  name: string;
  bedrooms: number;
  bathrooms: number;
  description: string;
  images: Array<{ main_image: Array<{ url: string }> }>;
  host: mongoose.Schema.Types.ObjectId;
  manager: mongoose.Schema.Types.ObjectId;
  property_type : Array <any> ;
  cutt_off_time: string;
  capacity_upper: number;
  capacity_lower: number;
  status: string;
  address: Array<{
    street: string;
    city: string;
    postal_code: number;
    country: string;
    zipcode: string;
  }>;
  sub_property: Array<{
    name: string;
    guest_capacity: Array<{
      childs: number;
      adults: number;
      infants: number;
      pets: number;
    }>;
    price: Array<{
      base_price: number;
      child_price: number;
      security_fee: number;
      cleaning_fee: number;
      minmum_advance_payment: number;
      weekend_price: number;
      special_price: number;
    }>;
    amenities: Array<string>;
    bathroom: number;
    safety_facilities: Array<string>;
    discount: Array<{
      flat_discount: number;
      percentage_discount: number;
      three_day: number;
      seven_day: number;
      fifteen_day: number;
      twenty_day: number;
    }>;
    description: string;
    booked_dates: Array<{ last_update: Date; dates: Date }>;
    room_images: Array<{
      cover_images: Array<{ url: string; name: string }>;
      room_internal_images: Array<{ url: string; name: string }>;
    }>;
  }>;
}
