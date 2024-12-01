import express from 'express';
import cors from 'cors';

export const createRestApiServer = () => {
    const restApiServer = express();
    restApiServer.use(cors());
    restApiServer.use(express.json());

    return restApiServer;
};
