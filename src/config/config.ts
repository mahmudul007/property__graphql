import dotenv from 'dotenv'

dotenv.config()

export const mongo_uri:any =process.env.MONGO_URI
export const cloud_name:any =process.env.CLOUD_NAME
export const api_key:any =process.env.API_KEY
export const api_secret:any =process.env.API_SECRET

