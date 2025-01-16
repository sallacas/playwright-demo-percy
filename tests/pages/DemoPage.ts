import type { Locator, Page } from "@playwright/test";
import { SuperPage } from "./SuperPage";

export class DemoPage extends SuperPage {
    usernameInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;

    constructor(page: Page) {
        super(page);
        this.usernameInput = page.locator("#username");
        this.passwordInput = page.locator("#password");
        this.loginButton = page.locator("#log-in");
    }
    async goToHome() {
        const URL = this.getEnvVariable('DEMO_URL');
        if (!URL) throw new Error('DEMO_URL Env Variable could be undefined');
        await this.page.goto(URL);
    }
    async doLogin(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        await this.page.waitForLoadState('domcontentloaded');
    }
    async doSuccessLogin(){
        const CORRECT_EMAIL = this.getEnvVariable('CORRECT_USER');
        const CORRECT_PASSWORD = this.getEnvVariable('CORRECT_PASSWORD');
        if(!CORRECT_EMAIL || !CORRECT_PASSWORD) throw new Error('Check Environment Variables for CORRECT EMAIL-PASSWORD')
        await this.doLogin(CORRECT_EMAIL, CORRECT_PASSWORD);
    }
}