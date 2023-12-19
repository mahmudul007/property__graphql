"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const propertiesService_1 = require("../../service/property/propertiesService");
const propertiesService_2 = require("../../service/property/propertiesService");
const propertiesService_3 = require("../../service/property/propertiesService");
const propertiesService_4 = require("../../service/property/propertiesService");
const propertiesService_5 = require("../../service/property/propertiesService");
const propertiesService_6 = require("../../service/property/propertiesService");
exports.resolvers = {
    Query: {
        hello: () => "Hello World!",
        getAllProperties: () => (0, propertiesService_2.getAllProperties)(),
        getPropertyById: (_, { id }) => (0, propertiesService_4.getPropertyById)(id),
        PropertyWithSubProperty: (_, { id }) => (0, propertiesService_6.PropertyWithSubProperty)(id),
    },
    Mutation: {
        createProperty: (_, { input }) => (0, propertiesService_1.createProperty)(input),
        deleteProperty: (_, { id }) => (0, propertiesService_3.deleteProperty)(id),
        updateProperty: (_, { id, input }) => (0, propertiesService_5.updateProperty)(id, input),
    },
};
