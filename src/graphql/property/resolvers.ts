import createProperty from "../../service/property/propertiesService";
import getAllProperties from "../../service/property/propertiesService";
import getPropertyById from "../../service/property/propertiesService";
import updateProperty from "../../service/property/propertiesService";
import deleteProperty from "../../service/property/propertiesService";



export const resolvers = {
    Query: {
      hello: () => "Hello World!",

    },
    Mutation: {
    },
  };
  