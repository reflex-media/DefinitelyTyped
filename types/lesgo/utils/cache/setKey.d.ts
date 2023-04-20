type Adapter = {
    options: {
        hosts: string[];
        autoDiscover: boolean;
    };
};

declare function setKey(
    key: string,
    value: string | object,
    opts?: { adapter?: Adapter; singletonConn?: string; ttl?: number },
): Promise<void>;

export default setKey;
