import {
    PutObjectCommand,
    GetObjectCommand,
    DeleteObjectCommand
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import r2 from './s3client/s3client.js';

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
        return imageUrl;
    } catch (error) {
        throw error;
    }
};

export const getImage = async (id) => {
    const getObjectCommand = new GetObjectCommand({
        Bucket: process.env.CLOUDFARE_BUCKET_NAME,
        Key: `images/${id}`
    });

    try {
        const r2ImageSignedUrl = await getSignedUrl(r2, getObjectCommand, {
            expiresIn: 60 * 60
        });
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
        return data;
    } catch (error) {
        throw error;
    }
};
