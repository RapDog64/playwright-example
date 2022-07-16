import {expect, Page, test} from "@playwright/test";

export class SearchResultPage {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async validateSearchKeyword(name: string ) {
        await test.step(`validate search keyword input contains ${name}`, async () => {
            await expect(this.page.locator("#Q")).toHaveValue(name);
        });
    }

    public async validateProductIsDisplayedInResultList(name: string ) {
        await test.step("validate the product is in the result list", async () => {
            await expect(this.page.locator(".product-title")).toHaveText(name);
        });
    }

    public async validateResultListEmpty(name: string ) {
        await test.step("validate result list is empty", async () => {
            await expect(this.page.locator(".search-results .result")).toHaveText(name);
        });
    }

}