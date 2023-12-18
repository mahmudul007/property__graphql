import { Ipoperty } from "../../lib/propertyInterface";
import { createProperty } from "../../service/property/propertiesService";
import {getAllProperties} from "../../service/property/propertiesService";
import {deleteProperty} from "../../service/property/propertiesService";
import {getPropertyById} from "../../service/property/propertiesService";
import {updateProperty} from "../../service/property/propertiesService";



export const resolvers:any = {
    Query: {
      hello: () => "Hello World!",
      getAllProperties: () => getAllProperties(),
      getPropertyById: (_:any, {id}:{id:string}) => getPropertyById(id),
     

    }
    ,
    Mutation: {
      createProperty:(_:any, {input}:{input:Ipoperty}) =>createProperty(input),
      deleteProperty: (_:any, {id}:{id:string}) => deleteProperty(id),
      updateProperty: (_:any,{id,input}:{id:string,input:Ipoperty}) => updateProperty(id , input)
    },
  };
  