import { S3Client } from '@aws-sdk/client-s3';

if (
    !process.env.CLOUDFARE_ACCESS_KEY_ID ||
    !process.env.CLOUDFARE_SECRET_ACCESS_KEY
) {
    throw new Error('Missing Cloudflare credentials');
}

const r2 = new S3Client({
    region: 'auto',
    endpoint: process.env.CLOUDFARE_ENDPOINT,
    credentials: {
        accessKeyId: process.env.CLOUDFARE_ACCESS_KEY_ID,
        secretAccessKey: process.env.CLOUDFARE_SECRET_ACCESS_KEY
    }
});

export default r2;
