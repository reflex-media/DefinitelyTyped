import { PutCommandOutput } from '@aws-sdk/lib-dynamodb';

declare function put(
    tableName: string,
    item: {
        [key: string]: any;
    },
    opts?: { singletonConn?: string },
): Promise<PutCommandOutput>;

export default put;
