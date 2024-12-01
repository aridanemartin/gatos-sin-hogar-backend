import {
    PutObjectCommand,
    GetObjectCommand,
    DeleteObjectCommand
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import NodeCache from 'node-cache';
import r2 from './s3client/s3client.js';
import { resetLog, yellowLog } from '../utils/logger.js';

// Create a cache instance with a default TTL (time-to-live) of 1 hour
const imageCache = new NodeCache({ stdTTL: 3600 });

export const uploadImage = async (file, id) => {
    const buffer = file.buffer;

    const putObjectCommand = new PutObjectCommand({
        Bucket: process.env.CLOUDFARE_BUCKET_NAME,
        Key: `images/${id}`,
        Body: buffer,
        ContentType: file.mimetype
    });

    try {
        await r2.send(putObjectCommand);
        const imageUrl = `${process.env.CLOUDFARE_ENDPOINT}/${process.env.CLOUDFARE_BUCKET_NAME}/images/${id}`;

        imageCache.set(id, imageUrl);
        return imageUrl;
    } catch (error) {
        throw error;
    }
};

export const getImage = async (id) => {
    const cachedImageUrl = imageCache.get(id);
    if (cachedImageUrl) {
        console.log(
            yellowLog,
            `Image with id ${id} returned from cache` + resetLog
        );
        return cachedImageUrl;
    }

    const getObjectCommand = new GetObjectCommand({
        Bucket: process.env.CLOUDFARE_BUCKET_NAME,
        Key: `images/${id}`
    });

    try {
        const r2ImageSignedUrl = await getSignedUrl(r2, getObjectCommand, {
            expiresIn: 60 * 60
        });

        imageCache.set(id, r2ImageSignedUrl);
        return r2ImageSignedUrl;
    } catch (error) {
        throw error;
    }
};

export const deleteImage = async (id) => {
    const deleteObjectCommand = new DeleteObjectCommand({
        Bucket: process.env.CLOUDFARE_BUCKET_NAME,
        Key: `images/${id}`
    });

    try {
        const data = await r2.send(deleteObjectCommand);

        imageCache.del(id);
        return data;
    } catch (error) {
        throw error;
    }
};
