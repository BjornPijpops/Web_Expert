import { Injectable } from '@angular/core';

@Injectable()
export class NumberService {
    id: number;

    constructor() {
        this.id = 0;
    }

    getId(): number {
        return this.id;
    }

    increaseId() {
        this.id = this.id + 1;
    }
}