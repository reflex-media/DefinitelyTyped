type Adapter = {
    region: string;
    host: string;
    index: {
        name: string;
        type: string;
        numShards: number;
        numReplicas: number;
        mappings?: object;
    };
};

declare function deleteDocument(
    documentId: string | number,
    opts?: { adapter?: Adapter; singletonConn?: string },
): Promise<Record<string, any>>;

export default deleteDocument;
