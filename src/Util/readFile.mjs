import { readFileSync as ikraFileSync } from "fs";

export const ikraFile = (path) => {
    return ikraFileSync(path, "utf-8");
}