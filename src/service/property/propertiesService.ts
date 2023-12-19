import { Document } from "mongoose";
import Property from "../../model/property";
import { Iproperty } from "../../model/interface/propertyInterface";
import { IsubProperty } from "../../model/interface/subPropertyInterface";
import SubProperty from "../../model/subproperty";



interface IExtendedProperty extends Iproperty, Document {}

const createProperty = async (property: Iproperty) => {
  console.log(property);
  try {
    const newProperty: IExtendedProperty = new Property(property);
    return await newProperty.save();
  } catch (error) {
    throw error;
  }
};

const getAllProperties = async () => {
  try {
    return await Property.find({});
  } catch (error) {
    throw error;
  }
};
const getPropertyById = async (id: string) => {
  try {
    return await Property.findById(id);
  } catch (error) {
    throw error;
  }
};


const PropertyWithSubProperty = async (id: string) => {
  try {
    const property = await Property.findById(id);
    if (!property) {
      throw new Error("Property not found");
    }
    const subProperties = await SubProperty.find({ property_id: property._id });
    console.log("subProperties", subProperties)
    return { property, subProperties };
    
  } catch (error) {
    
  }
};

const updateProperty = async (id: string, property: Iproperty) => {
  try {
    const propertyToUpdate = await Property.findByIdAndUpdate(id, property, {
      new: true,
    });
    if (!propertyToUpdate) {
      throw new Error("Property not found");
    }
    return propertyToUpdate;
  } catch (error) {
    throw error;
  }
};

const deleteProperty = async (id: string) => {
  console.log(id);
  try {
    const propertyToDelete = await Property.findByIdAndDelete(id);
    if (!propertyToDelete) {
      throw new Error("Property not found");
    }
    return propertyToDelete;
  } catch (error) {
    throw error;
  }
};
export {
  createProperty,
  getAllProperties,
  getPropertyById,
  updateProperty,
  deleteProperty,
  PropertyWithSubProperty
};
