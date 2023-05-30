type Adapter = {
    options: {
        hosts: string[];
        autoDiscover: boolean;
    };
};

declare function deleteKey(key: string, opts?: { adapter?: Adapter; singletonConn?: string }): Promise<void>;

export default deleteKey;
