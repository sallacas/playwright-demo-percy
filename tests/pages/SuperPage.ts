import { expect, type Expect, type Page } from "@playwright/test";
import * as dotenv from "dotenv";

dotenv.config();

export class SuperPage {
    page: Page;
    expect: Expect;

    constructor(page: Page) {
        this.page = page;
        this.expect = expect;
    }

    getEnvVariable(name: string): string | undefined {
        const variable = process.env[name];
        if (!variable) throw new Error(`The environment variable ${name} has not been declared`) 
        return process.env[name];
    }
}
