import { SubProperty } from './../subProperty/index';
import { Iproperty } from "../../model/interface/propertyInterface";
import { createProperty } from "../../service/property/propertiesService";
import { getAllProperties } from "../../service/property/propertiesService";
import { deleteProperty } from "../../service/property/propertiesService";
import { getPropertyById } from "../../service/property/propertiesService";
import { updateProperty } from "../../service/property/propertiesService";
import { PropertyWithSubProperty } from "../../service/property/propertiesService";

export const resolvers: any = {

  Query: {
    hello: () => "Hello World!",
    getAllProperties: () => getAllProperties(),
    getPropertyById: (_: any, { id }: { id: string }) => getPropertyById(id),
    PropertyWithSubProperty: (_: any, { id }: { id: string }) =>
    PropertyWithSubProperty(id),
  },
  Mutation: {
    createProperty: (_: any, { input }: { input: Iproperty }) =>
      createProperty(input),
    deleteProperty: (_: any, { id }: { id: string }) => deleteProperty(id),
    updateProperty: (_: any, { id, input }: { id: string; input: Iproperty }) =>
      updateProperty(id, input),
  },
};
