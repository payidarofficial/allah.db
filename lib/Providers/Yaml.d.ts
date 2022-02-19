import { ValueType } from '../@types/types';
export declare class YamlDatabase {
    private path;
    data: any;
    constructor({ path }?: {
        path?: string;
    });
    set(key: string, value: ValueType): void;
    get(key: string): ValueType;
    delete(key: string): void;
    push(key: string, value: ValueType): void;
    pull(key: string, value: ValueType): void;
    add(key: string, num: number): void;
    substr(key: string, num: number): void;
    all(): any;
}
//# sourceMappingURL=Yaml.d.ts.map