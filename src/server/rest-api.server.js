import express from 'express';
import cors from 'cors';
import { corsConfig } from '../config/config.js';

export const createRestApiServer = () => {
    const restApiServer = express();
    restApiServer.use(cors(corsConfig));
    restApiServer.use(express.json());

    return restApiServer;
};
