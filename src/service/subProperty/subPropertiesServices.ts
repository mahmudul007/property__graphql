import { Document } from "mongoose";
import { IsubProperty } from "../../model/interface/subPropertyInterface";
import SubProperty from "../../model/subproperty";
interface IExtendedSubProperty extends IsubProperty, Document {}

const createSubProperty = async (input: IsubProperty) => {
  try {
    console.log("input", input);
    const newSubProperty: IExtendedSubProperty = await SubProperty.create(
      input
    );
    return newSubProperty;
  } catch (error) {
    throw error;
  }
};
const getAllSubProperty = async () => {
  try {
    const subProperty: Array<IExtendedSubProperty> = await SubProperty.find();
    return subProperty;
  } catch (error) {
    throw error;
  }
};
const getSubPropertyById = async (id: string) => {
  try {
    const subProperty = await SubProperty.findById(id);
    return subProperty;
  } catch (error) {
    throw error;
  }
};
const deleteSubPropertyById = async (id: string) => {
  try {
    const subProperty = await SubProperty.findByIdAndDelete(id);
    return subProperty;
  } catch (error) {
    throw error;
  }
};
const updateSubPropertyById = async (id: string, input: IsubProperty) => {
  console.log(input);
  try {
    const subProperty = await SubProperty.findByIdAndUpdate(id, input, {
      new: true,
    });
    if (!subProperty) {
      throw new Error("Sub Property not found");
    }
    console.log("subProperty lst", subProperty);
    return subProperty;
  } catch (error) {
    throw error;
  }
};

export {
  createSubProperty,
  getAllSubProperty,
  getSubPropertyById,
  deleteSubPropertyById,
  updateSubPropertyById,
};
