"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.api_secret = exports.api_key = exports.cloud_name = exports.mongo_uri = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.mongo_uri = process.env.MONGO_URI;
exports.cloud_name = process.env.CLOUD_NAME;
exports.api_key = process.env.API_KEY;
exports.api_secret = process.env.API_SECRET;
