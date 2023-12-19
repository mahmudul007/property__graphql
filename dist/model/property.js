"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const PropertySchema = new mongoose_1.default.Schema({
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
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        required: false,
    },
    manager: {
        type: mongoose_1.default.Schema.Types.ObjectId,
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
exports.default = mongoose_1.default.model("Property", PropertySchema);
