import {expect, Page, test} from "@playwright/test";

export class HeaderMenu {

    private readonly page: Page

    constructor(page: Page) {
        this.page = page;
    }

    public async validateUserProfileEmail(email: string) {
        await test.step(`Validate user profile email is ${email}`, async () => {
            await expect(this.page.locator(".header-links .account")).toHaveText(email);
        });
    }
}