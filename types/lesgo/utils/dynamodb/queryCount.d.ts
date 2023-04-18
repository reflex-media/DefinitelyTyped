declare function queryCount(
    tableName: string,
    keyConditionExpression: string,
    expressionAttributeValues: {
        [key: string]: any;
    },
    opts?: { singletonConn?: string },
): Promise<number | undefined>;

export default queryCount;
