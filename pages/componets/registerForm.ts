import {expect, Page, test} from "@playwright/test";
import {GenderOptions} from "../../models/genderOptions";

export class RegisterForm {
    private readonly page: Page

    // $("#gender-male");
    //  $("#gender-female");

    constructor(page: Page) {
        this.page = page;
    }

    public async chooseGender(gender: GenderOptions) {
        await test.step(`Pick the gender '${gender}'`, async () => {
            if (gender.valueOf() == 0) {
                await this.page.locator("#gender-male").click();
            } else {
                await this.page.locator("#gender-female").click();
            }
        });
    }

    public async typeNewUserEmail(email: string) {
        await test.step(`Enter the user email: '${email}'`, async () => {
            await this.page.locator("#Email").fill(email);
        });
    }

    public async typeFirstName(firstName: string) {
        await test.step(`Enter the firstname: '${firstName}'`, async () => {
            await this.page.locator("#FirstName").fill(firstName);
        });
    }

    public async typeLastName(lastname: string) {
        await test.step(`Enter the lastname: '${lastname}'`, async () => {
            await this.page.locator("#LastName").fill(lastname);
        });
    }

    public async typeUserPassword(password: string) {
        await test.step(`Enter the password: '${password}'`, async () => {
            await this.page.locator("#Password").fill(password);
        });
    }

    public async typeConfirmPassword(confirmPassword: string) {
        await test.step(`Enter the confirm password: '${confirmPassword}'`, async () => {
            await this.page.locator("#ConfirmPassword").fill(confirmPassword);
        });
    }

    public async clickRegisterButton() {
        await test.step(`Click the 'Register' button`, async () => {
            await this.page.locator("#register-button").click()
        });
    }

    public async getSuccessfulRegistrationMessage(message: string) {
        await test.step(`Validate successful registration message is appeared`, async () => {
            await expect(this.page.locator(".page-body .result")).toHaveText(message);
        });
    }


    public async navigate() {
        await test.step("Navigate to Registration page", async () => {
            await this.page.goto("/register");
        });
    }
}