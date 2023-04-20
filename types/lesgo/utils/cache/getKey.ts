type Adapter = {
    options: {
        hosts: string[];
        autoDiscover: boolean;
    };
};

declare function getKey(
    key: string,
    opts?: { adapter?: Adapter; singletonConn?: string },
): Promise<Record<string, any>>;

export default getKey;
