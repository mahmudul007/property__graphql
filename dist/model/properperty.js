"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const useSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    bedroom: {
        type: Number,
        required: true
    },
    bathroom: {
        type: Number,
        required: true
    },
    type: {
        type: Array,
        default: [],
        comment: "house, apartment, hotel, room, etc"
    },
    description: {
        type: String,
        default: ""
    },
    images: {
        type: Array,
        default: []
    },
    host: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        required: false
    },
    manager: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        required: false
    },
    cutt_off_time: {
        type: String,
        required: true
    },
    capacity_upper: {
        type: Number,
        required: true
    },
    capacity_lower: {
        type: Number,
        required: true
    },
    sub_property: [
        {
            name: {
                type: String,
                required: true
            },
            guest_capacity: [
                {
                    child: {
                        type: Number,
                        required: true
                    },
                    adult: {
                        type: Number,
                        required: true
                    },
                    infant: {
                        type: Number,
                        required: true
                    },
                    pet: {
                        type: Number,
                        required: true
                    }
                }
            ],
            price: [
                {
                    base_price: {
                        type: Number,
                        required: true
                    },
                    child_price: {
                        type: Number,
                        required: true
                    },
                    security_fee: {
                        type: Number,
                        required: true
                    },
                    cleaning_fee: {
                        type: Number,
                        required: true
                    },
                    minmum_advance_payment: {
                        type: Number,
                        required: true
                    },
                    weekend_price: {
                        type: Number,
                        required: true
                    },
                    special_price: {
                        type: Number,
                        required: true
                    },
                }
            ],
            amenities: {
                type: Array,
                default: []
            },
            bathroom: {
                type: Number,
                required: true
            },
            safety_facilities: {
                type: Array,
                default: []
            },
            discount: [
                {
                    flat_discount: {
                        type: Number,
                        required: true
                    },
                    three_day: {
                        type: Number,
                        required: true
                    },
                    seven_day: {
                        type: Number,
                        required: true
                    },
                    fifteen_day: {
                        type: Number,
                        required: true
                    },
                    twenty_day: {
                        type: Number,
                        required: true
                    },
                }
            ],
            description: {
                type: String,
                default: ""
            },
            booked_date: [
                {
                    last_update: {
                        type: Date,
                        required: true
                    },
                    dates: {
                        type: Date,
                        required: true
                    },
                }
            ],
            images: [
                {
                    cover_image: [
                        {
                            url: {
                                type: String,
                                required: true
                            },
                            name: {
                                type: String,
                                required: true
                            }
                        }
                    ],
                    room_image: [
                        {
                            url: {
                                type: String,
                                required: true
                            },
                            name: {
                                type: String,
                                required: true
                            }
                        }
                    ]
                }
            ]
        }
    ],
    address: [
        {
            street: {
                type: String,
                required: true
            },
            city: {
                type: String,
                required: true
            },
            postal_code: {
                type: Number,
                required: true
            },
            country: {
                type: String,
                required: true
            }
        }
    ],
    status: {
        enum: ["accepted", "pending", "rejected"],
        type: String,
        default: "active"
    },
});
exports.default = mongoose_1.default.model("Property", useSchema);
