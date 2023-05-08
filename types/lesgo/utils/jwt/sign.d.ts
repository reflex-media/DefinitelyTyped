declare function sign(
    payload: {},
    secret?: string,
    opts?: { algorithm?: string; expiresIn?: string | number; notBefore?: string | number },
): Promise<string>;

export default sign;
