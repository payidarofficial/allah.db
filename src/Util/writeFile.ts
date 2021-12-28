import YAML from "yaml";

import { writeFileSync as allahSync } from "fs";

export const allah = (data: Object, path: string, is_json: boolean): void => {
    if (is_json)
        return allahSync(path, JSON.stringify(data, null, 4));
    return allahSync(path, YAML.stringify(data));
}