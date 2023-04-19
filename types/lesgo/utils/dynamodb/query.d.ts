declare function query(
    tableName: string,
    keyConditionExpression: string,
    expressionAttributeValues: {
        [key: string]: any;
    },
    opts?: { singletonConn?: string; filterExpression?: string; projectionExpression?: string },
): Promise<Array<Record<string, any>> | undefined>;

export default query;
