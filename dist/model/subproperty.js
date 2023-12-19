"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const SubPropertySchema = new mongoose_1.default.Schema({
    property_id: {
        type: mongoose_1.default.Schema.Types.ObjectId,
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
exports.default = mongoose_1.default.model("SubProperty", SubPropertySchema);
