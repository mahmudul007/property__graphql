import mongoose, { Document } from "mongoose";
import { IsubProperty } from "./interface/subPropertyInterface";
interface IExtendedSubProperty extends IsubProperty, Document {}

const SubPropertySchema = new mongoose.Schema<IsubProperty>({
  property_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Property",
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  guest_capacity: [
    {
      childs: {
        type: Number,
        required: true,
      },
      adults: {
        type: Number,
        required: true,
      },
      infants: {
        type: Number,
        required: true,
      },
      pets: {
        type: Number,
        required: true,
      },
    },
  ],
  price: [
    {
      base_price: {
        type: Number,
        required: true,
      },
      child_price: {
        type: Number,
        required: true,
      },
      security_fee: {
        type: Number,
        required: true,
      },
      cleaning_fee: {
        type: Number,
        required: true,
      },
      minmum_advance_payment: {
        type: Number,
        required: false,
      },
      weekend_price: {
        type: Number,
        required: true,
      },
      special_price: {
        type: Number,
        required: true,
      },
    },
  ],

  amenities: {
    type: [String], // Indicates an array of strings
    default: [],
  },
  bathroom: {
    type: Number,
    required: false,
  },
  safety_facilities: {
    type: [String],
    default: [],
  },
  discount: [
    {
      flat_discount: {
        type: Number,
        required: true,
      },
      percentage_discount: {
        type: Number,
        required: true,
      },
      three_day: {
        type: Number,
        required: true,
      },
      seven_day: {
        type: Number,
        required: true,
      },
      fifteen_day: {
        type: Number,
        required: true,
      },
    },
  ],
  description: {
    type: String,
    default: "",
  },
  booked_dates: [
    {
      last_update: {
        type: Date,
        required: true,
      },
      dates: {
        type: Date,
        required: true,
      },
    },
  ],
  room_images: [
    {
      cover_images: [
        {
          url: {
            type: String,
            required: true,
          },
          name: {
            type: String,
            required: true,
          },
        },
      ],
      room_internal_images: [
        {
          url: {
            type: String,
            required: true,
          },
          name: {
            type: String,
            required: true,
          },
        },
      ],
    },
  ],
});
export default mongoose.model<IsubProperty>("SubProperty", SubPropertySchema);
