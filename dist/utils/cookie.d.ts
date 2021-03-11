declare function getsec(str: string): number | undefined;
declare const cookie: {
    set(name: any, value: any, time: any, path: any, domain: any): void;
    get(name: any): string | null;
    /**
     * 设置对应cookie的过期时间为当前时间
     */
    remove(): void;
};
