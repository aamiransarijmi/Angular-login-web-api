export class responseBase {
    data: any;
    success: boolean;
    message: string;
    constructor() {
        this.data = null;
        this.success = false;
        this.message = '';

    }
}