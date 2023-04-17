import { Client } from '@opensearch-project/opensearch';

export interface OpenSearchServiceOptsIndex {
    name: string;
    type: string;
    numShards: number;
    numReplicas: number;
    mappings: object;
}

export interface OpenSearchServiceOpts {
    region: string;
    host: string;
    index: OpenSearchServiceOptsIndex;
}

export default class OpenSearchService {
    opts: OpenSearchServiceOpts;

    constructor(opts: OpenSearchServiceOpts);

    getClient(): Client;

    createIndex(): Promise<Record<string, any>>;

    indexDocument(documentId: string, data: object): Promise<Record<string, any>>;

    searchIndex(query: object): Promise<Record<string, any>>;

    deleteDocument(documentId: string | number): Promise<Record<string, any>>;

    deleteIndex(): Promise<Record<string, any>>;
}
