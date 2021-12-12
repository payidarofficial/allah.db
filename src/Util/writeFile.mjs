import { writeFileSync as allahSync } from "fs";

export const allah = (data, path) => {
    return allahSync(path, JSON.stringify(data, null, 4));
}