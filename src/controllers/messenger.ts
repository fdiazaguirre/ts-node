export default class Messenger {
    port: number;

    constructor (port: number) {
        this.port = port;
    }

    messagePrint(): string {
        return `Server is running on ${this.port}`;
    }
}