"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const subPropertiesServices_1 = require("../../service/subProperty/subPropertiesServices");
const subPropertiesServices_2 = require("../../service/subProperty/subPropertiesServices");
const subPropertiesServices_3 = require("../../service/subProperty/subPropertiesServices");
const subPropertiesServices_4 = require("../../service/subProperty/subPropertiesServices");
const subPropertiesServices_5 = require("../../service/subProperty/subPropertiesServices");
exports.resolvers = {
    Query: {
        hello: () => "Hello from sub property World!",
        getAllSubProperty: () => (0, subPropertiesServices_2.getAllSubProperty)(),
        getSubPropertyById: (_, { id }) => (0, subPropertiesServices_3.getSubPropertyById)(id),
    },
    Mutation: {
        createSubProperty: (_, { input }) => (0, subPropertiesServices_1.createSubProperty)(input),
        deleteSubPropertyById: (_, { id }) => (0, subPropertiesServices_4.deleteSubPropertyById)(id),
        updateSubPropertyById: (_, { id, input }) => (0, subPropertiesServices_5.updateSubPropertyById)(id, input),
    },
};
