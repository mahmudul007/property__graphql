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
exports.PropertyWithSubProperty = exports.deleteProperty = exports.updateProperty = exports.getPropertyById = exports.getAllProperties = exports.createProperty = void 0;
const property_1 = __importDefault(require("../../model/property"));
const subproperty_1 = __importDefault(require("../../model/subproperty"));
const createProperty = (property) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(property);
    try {
        const newProperty = new property_1.default(property);
        return yield newProperty.save();
    }
    catch (error) {
        throw error;
    }
});
exports.createProperty = createProperty;
const getAllProperties = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield property_1.default.find({});
    }
    catch (error) {
        throw error;
    }
});
exports.getAllProperties = getAllProperties;
const getPropertyById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield property_1.default.findById(id);
    }
    catch (error) {
        throw error;
    }
});
exports.getPropertyById = getPropertyById;
const PropertyWithSubProperty = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const property = yield property_1.default.findById(id);
        if (!property) {
            throw new Error("Property not found");
        }
        const subProperties = yield subproperty_1.default.find({ property_id: property._id });
        console.log("subProperties", subProperties);
        return { property, subProperties };
    }
    catch (error) {
    }
});
exports.PropertyWithSubProperty = PropertyWithSubProperty;
const updateProperty = (id, property) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const propertyToUpdate = yield property_1.default.findByIdAndUpdate(id, property, {
            new: true,
        });
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
        const propertyToDelete = yield property_1.default.findByIdAndDelete(id);
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
