import consola from "consola";

export class Çarpma extends Error {
    constructor(message) {
        super();
        consola.error(`${message}`);
    }
}
