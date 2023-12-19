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
exports.updateSubPropertyById = exports.deleteSubPropertyById = exports.getSubPropertyById = exports.getAllSubProperty = exports.createSubProperty = void 0;
const subproperty_1 = __importDefault(require("../../model/subproperty"));
const createSubProperty = (input) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("input", input);
        const newSubProperty = yield subproperty_1.default.create(input);
        return newSubProperty;
    }
    catch (error) {
        throw error;
    }
});
exports.createSubProperty = createSubProperty;
const getAllSubProperty = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const subProperty = yield subproperty_1.default.find();
        return subProperty;
    }
    catch (error) {
        throw error;
    }
});
exports.getAllSubProperty = getAllSubProperty;
const getSubPropertyById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const subProperty = yield subproperty_1.default.findById(id);
        return subProperty;
    }
    catch (error) {
        throw error;
    }
});
exports.getSubPropertyById = getSubPropertyById;
const deleteSubPropertyById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const subProperty = yield subproperty_1.default.findByIdAndDelete(id);
        return subProperty;
    }
    catch (error) {
        throw error;
    }
});
exports.deleteSubPropertyById = deleteSubPropertyById;
const updateSubPropertyById = (id, input) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(input);
    try {
        const subProperty = yield subproperty_1.default.findByIdAndUpdate(id, input, {
            new: true,
        });
        if (!subProperty) {
            throw new Error("Sub Property not found");
        }
        console.log("subProperty lst", subProperty);
        return subProperty;
    }
    catch (error) {
        throw error;
    }
});
exports.updateSubPropertyById = updateSubPropertyById;
