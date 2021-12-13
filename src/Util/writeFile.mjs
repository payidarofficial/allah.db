import YAML from "yaml";

import { writeFileSync as allahSync } from "fs";

export const allah = (data, path, is_json) => {
    if (is_json)
        return allahSync(path, JSON.stringify(data, null, 4));
    return allahSync(path, YAML.stringify(data));
}