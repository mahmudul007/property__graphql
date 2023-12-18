import Property from "../../model/properperty";
import { Ipoperty } from "../../lib/propertyInterface";

const createProperty = async (property: Ipoperty) => {
    console.log(property)
    try {
        const newProperty:Ipoperty = new Property(property);
        return await newProperty.save();
    } catch (error) {
        throw error;
    }
    }


const getAllProperties = async () => {
    try {
        return await Property.find({});
    } catch (error) {
        throw error;
    }
}
const getPropertyById = async (id: string) => {
    try {
        return await Property.findById(id);
    } catch (error) {
        throw error;
    }
}

const updateProperty = async (id: string,property: Ipoperty) => {

    try {
        const propertyToUpdate = await Property.findByIdAndUpdate(id , property);
        if(!propertyToUpdate){
            throw new Error("Property not found");
        }
        return propertyToUpdate;
        
        
    } catch (error) {
        throw error;
        
    }
}

const deleteProperty = async (id: string) => {
    console.log(id)
    try {
        const propertyToDelete = await Property.findByIdAndDelete(id);
        if(!propertyToDelete){
            throw new Error("Property not found");
        }
        return propertyToDelete;
    } catch (error) {
        throw error;
    }
}
export  {
    createProperty,
    getAllProperties,
    getPropertyById,
    updateProperty,
    deleteProperty
}
