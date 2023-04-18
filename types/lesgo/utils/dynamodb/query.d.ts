declare function query(
    tableName: string,
    keyConditionExpression: string,
    expressionAttributeValues: {
        [key: string]: any;
    },
    projectionExpression: string,
    opts?: { singletonConn?: string },
): Promise<Array<Record<string, any>> | undefined>;

export default query;
