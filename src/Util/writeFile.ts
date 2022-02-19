import YAML from 'yaml';

import { writeFileSync } from 'fs';

export const write = (data: Object, path: string, is_json: boolean): void => {
    if (is_json) return writeFileSync(path, JSON.stringify(data, null, 4));
    return writeFileSync(path, YAML.stringify(data));
};
