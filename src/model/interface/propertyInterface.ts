import mongoose from "mongoose";
export interface Iproperty {
  name: string;
  bedrooms: number;
  bathrooms: number;
  description: string;
  images: Array<{ main_image: Array<{ url: string }> }>;
  host: mongoose.Schema.Types.ObjectId;
  manager: mongoose.Schema.Types.ObjectId;
  property_type: Array<any>;
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
}
