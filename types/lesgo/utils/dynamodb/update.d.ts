import { UpdateCommandOutput } from '@aws-sdk/lib-dynamodb';

declare function update(
    tableName: string,
    key: {
        [key: string]: any;
    },
    updateExpression: string,
    expressionAttributeValues: {
        [key: string]: any;
    },
    opts?: {
        singletonConn?: string;
        conditionExpression: string;
    },
): Promise<UpdateCommandOutput>;

export default update;
