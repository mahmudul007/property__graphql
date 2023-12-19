import { IsubProperty } from "../../model/interface/subPropertyInterface";
import { createSubProperty } from "../../service/subProperty/subPropertiesServices";
import { getAllSubProperty } from "../../service/subProperty/subPropertiesServices";
import { getSubPropertyById } from "../../service/subProperty/subPropertiesServices";
import { deleteSubPropertyById } from "../../service/subProperty/subPropertiesServices";
import { updateSubPropertyById } from "../../service/subProperty/subPropertiesServices";
export const resolvers: any = {
  Query: {
    hello: () => "Hello from sub property World!",
    getAllSubProperty: () => getAllSubProperty(),
    getSubPropertyById: (_: any, { id }: { id: string }) =>
      getSubPropertyById(id),
  },
  Mutation: {
    createSubProperty: (_: any, { input }: { input: IsubProperty }) =>
      createSubProperty(input),
    deleteSubPropertyById: (_: any, { id }: { id: string }) =>
      deleteSubPropertyById(id),
    updateSubPropertyById: (
      _: any,
      { id, input }: { id: string; input: IsubProperty }
    ) => updateSubPropertyById(id, input),
  },
};
