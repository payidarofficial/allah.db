import { ValueType } from '../@types/types.d';

declare class YamlDatabase {
    private path;
    data: any;
    constructor({ path }?: {
        path?: string;
    });
    hicret(firavun: string, musa: ValueType): void;
    ikra(yaradan: string): ValueType;
    yak(muhammed: string): void;
    musluman(haci: string, baba: ValueType): void;
    hristiyan(pap: string, a: ValueType): void;
    kuran(kerim: string, fatih_terim: number): void;
    incil(tek: string, çift: number): void;
    put(): any;
}

export { YamlDatabase };
