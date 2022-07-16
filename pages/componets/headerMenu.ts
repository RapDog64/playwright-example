import {expect, Page, test} from "@playwright/test";

export class HeaderMenu {

    private readonly page: Page

    constructor(page: Page) {
        this.page = page;
    }

    public async validateUserProfileEmail(email: string) {
        await test.step(`Validate user email: ${email} is displayed`, async () => {
            await expect(this.page.locator(".header-links .account")).toHaveText(email);
        });
    }
}