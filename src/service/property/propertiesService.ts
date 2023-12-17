import Property from "../../model/properperty";

const createProperty = async (property: any) => {
    try {
        const newProperty = new Property(property);
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

const updateProperty = async (id: string, property: any) => {

    try {
        const propertyToUpdate = await Property.findByIdAndUpdate(id);
        if(!propertyToUpdate){
            throw new Error("Property not found");
        }
        
        
    } catch (error) {
        throw error;
        
    }
}

const deleteProperty = async (id: string) => {
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
export default {
    createProperty,
    getAllProperties,
    getPropertyById,
    updateProperty,
    deleteProperty
}
