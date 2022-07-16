import {expect, Page, test} from "@playwright/test";

export class MainPage {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async navigate() {
        await test.step("Navigate to Log in page", async () => {
            this.page.goto("/login");
        });

        return this;
    }

    public async typeEmail(email: string) {
        await test.step(`Enter email: ${email}`, async () => {
            await this.page.locator("#Email").fill(email);
        });
    }

    public async typePassword(password: string) {
        await test.step(`Enter password: ${password}`, async () => {
            await this.page.locator("#Password").fill(password);
        });
    }

    public async clickLogin() {
        await test.step("Click on the 'Login' button", async () => {
            await this.page.locator("//input[@value='Log in']").click();
        });
    }

    public async verifyErrorMessage(message: string) {
        await test.step("Verify the error message", async () => {
            await expect(this.page.locator('div[class="validation-summary-errors"]')).toHaveText(message);
        });
    }

}