import express from "express";
import cors from "cors";
import "dotenv/config";

export const createRestApiServer = () => {
    const restApiServer = express();
    restApiServer.use(cors());
    restApiServer.use(express.json());

    return restApiServer;
}

