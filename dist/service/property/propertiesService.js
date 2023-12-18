"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProperty = exports.updateProperty = exports.getPropertyById = exports.getAllProperties = exports.createProperty = void 0;
const properperty_1 = __importDefault(require("../../model/properperty"));
const createProperty = (property) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(property);
    try {
        const newProperty = new properperty_1.default(property);
        return yield newProperty.save();
    }
    catch (error) {
        throw error;
    }
});
exports.createProperty = createProperty;
const getAllProperties = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield properperty_1.default.find({});
    }
    catch (error) {
        throw error;
    }
});
exports.getAllProperties = getAllProperties;
const getPropertyById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield properperty_1.default.findById(id);
    }
    catch (error) {
        throw error;
    }
});
exports.getPropertyById = getPropertyById;
const updateProperty = (id, property) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const propertyToUpdate = yield properperty_1.default.findByIdAndUpdate(id, property);
        if (!propertyToUpdate) {
            throw new Error("Property not found");
        }
        return propertyToUpdate;
    }
    catch (error) {
        throw error;
    }
});
exports.updateProperty = updateProperty;
const deleteProperty = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(id);
    try {
        const propertyToDelete = yield properperty_1.default.findByIdAndDelete(id);
        if (!propertyToDelete) {
            throw new Error("Property not found");
        }
        return propertyToDelete;
    }
    catch (error) {
        throw error;
    }
});
exports.deleteProperty = deleteProperty;
