"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDb = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("../config/config");
const connectDb = () => {
    mongoose_1.default
        .connect(config_1.mongo_uri)
        .then(() => console.log("DB Connected!"))
        .catch((err) => {
        console.log(Error, err.message);
    });
};
exports.connectDb = connectDb;
