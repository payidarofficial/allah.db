import { readFileSync as ikraFileSync } from "fs";
import YAML from "yaml";

export const ikraFile = (path) => {
    return ikraFileSync(path, "utf-8");
}