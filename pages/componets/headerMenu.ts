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

    public async typeProductByName(name: string) {
        await test.step(`Type ${name} in the search box`, async () => {
            await this.page.locator("[name='q']").fill(name);
        });
    }

    public async clickSearchButton() {
        await test.step("Click 'Search' button", async () => {
            await this.page.locator("[value='Search']").click();
        });
    }
}