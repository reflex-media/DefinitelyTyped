import { BucketName, ObjectKey } from 'aws-sdk2-types/clients/s3';

declare function getDownloadSignedUrl(
    key: ObjectKey,
    bucketName: BucketName,
    opts?: {
        singletonConn?: string;
        region?: string;
        expiresIn?: number;
    },
): Promise<string>;

export default getDownloadSignedUrl;
