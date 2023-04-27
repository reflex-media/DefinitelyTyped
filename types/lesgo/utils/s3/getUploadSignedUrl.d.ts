import { BucketName, ObjectKey } from 'aws-sdk2-types/clients/s3';

declare function getUploadSignedUrl(
    key: ObjectKey,
    bucketName: BucketName,
    opts?: {
        singletonConn?: string;
        region?: string;
    },
): Promise<string>;

export default getUploadSignedUrl;
