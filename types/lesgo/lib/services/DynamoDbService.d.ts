import {
    DynamoDBDocumentClient,
    PutCommandOutput,
    UpdateCommandOutput,
} from '@aws-sdk/lib-dynamodb';

export default class DynamoDb {
    client: DynamoDBDocumentClient;

    constructor(opts?: { region: string });

    connect(opts?: { region: string }): void;

    query(
        tableName: string,
        keyConditionExpression: string,
        expressionAttributeValues: {
            [key: string]: any;
        },
        projectionExpression: string,
    ): Promise<Record<string, any>[] | undefined>;

    queryCount(
        tableName: string,
        keyConditionExpression: string,
        expressionAttributeValues: {
            [key: string]: any;
        },
    ): Promise<number | undefined>;

    put(
        tableName: string,
        item: {
            [key: string]: any;
        },
    ): Promise<PutCommandOutput>;

    update(
        tableName: string,
        key: {
            [key: string]: any;
        },
        updateExpression: string,
        expressionAttributeValues: {
            [key: string]: any;
        },
        opts?: {
            conditionExpression: string;
        },
    ): Promise<UpdateCommandOutput>;
}
