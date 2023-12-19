import { time } from "console";
import mongoose from "mongoose";
import { Iproperty } from "./interface/propertyInterface";

const PropertySchema = new mongoose.Schema<Iproperty>({
  name: {
    type: String,
    required: true,
  },

  bedrooms: {
    type: Number,
    required: true,
  },
  bathrooms: {
    type: Number,
    required: true,
  },
  property_type: [],

  description: {
    type: String,
    default: "",
  },

  images: [
    {
      main_image: [
        {
          url: {
            type: String,
            required: true,
          },
        },
      ],
    },
  ],

  host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  manager: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  cutt_off_time: {
    type: String,
    required: true,
  },
  capacity_upper: {
    type: Number,
    required: true,
  },
  capacity_lower: {
    type: Number,
    required: true,
  },

  address: [
    {
      street: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      postal_code: {
        type: Number,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      zipcode: {
        type: String,
        required: true,
      },
    },
  ],
  status: {
    enum: ["accepted", "pending", "rejected"],
    type: String,
    default: "active",
  },
});
export default mongoose.model<Iproperty>("Property", PropertySchema);
