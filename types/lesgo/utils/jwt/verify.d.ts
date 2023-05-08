declare function verify(token: string, secret?: string, opts?: { algorithm?: string }): Promise<string>;

export default verify;
