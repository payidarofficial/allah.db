import consola from 'consola';

enum Errors {
    'key' = "Allah'ın verdiği sözcükler ile bir tane anahtar belirtmen lazım",
    'key-value' = "Allah'ın verdiği sözcükler ile bir tane anahtar ve değer belirtmen lazım",
    'array' = "Allah'ın verdiği array (liste)'i kullanmamamışsın",
    'not_found' = "Allah'ın verisi yok",
    'number' = "Allah'ın verdiği sayıları kullan",
}

export class DatabaseError extends Error {
    constructor(id) {
        super();
        consola.error(`${Errors[id]}`);
    }
}
