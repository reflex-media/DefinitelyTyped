import { DeleteCommandOutput } from '@aws-sdk/lib-dynamodb';

declare function deleteRecord(
    tableName: string,
    key: {
        [key: string]: any;
    },
    opts?: { singletonConn?: string },
): Promise<DeleteCommandOutput>;

export default deleteRecord;
