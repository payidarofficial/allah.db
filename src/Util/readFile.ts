import { readFileSync as ikraFileSync } from "fs";

export const ikraFile = (path: string): string => {
    return ikraFileSync(path, "utf-8");
}