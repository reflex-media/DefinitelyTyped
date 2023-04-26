import { BucketName, ObjectKey, GetObjectOutput } from 'aws-sdk2-types/clients/s3';

declare function getObject(key: ObjectKey, bucketName: BucketName): Promise<GetObjectOutput>;

export default getObject;
