import mongoose from "mongoose";
import { mongo_uri } from "../config/config";


export const connectDb=()=>{mongoose
  .connect(mongo_uri)
  .then(() => console.log("DB Connected!"))
  .catch((err) => {
    console.log(Error, err.message);
  });}
