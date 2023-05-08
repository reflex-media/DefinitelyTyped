import { BucketName, ObjectKey } from 'aws-sdk2-types/clients/s3';

declare function getHeadObject(
    key: ObjectKey,
    bucketName: BucketName,
    opts?: {
        singletonConn?: string;
        region?: string;
    },
): Promise<{ LastModified: string; ContentLength: number; ETag: string; ContentType: string; Metadata?: object }>;

export default getHeadObject;
