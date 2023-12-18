import express from "express";
import cors from "cors";
import { expressMiddleware } from "@apollo/server/express4";
import server from "./graphql";
import {connectDb} from "./db/db";
import fileUpload from 'express-fileupload';

async function createServer() {
  const app = express();
  const PORT = 3000;
 connectDb();

  app.use(cors(), express.json());
  app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

  await server.start();

  app.use("/graphql", expressMiddleware(server));

  app.listen(PORT, () => {
    console.log(`Graphql is running on http://localhost:${PORT}`);
  });
}

createServer();
