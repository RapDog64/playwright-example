import {type Page, test} from '@playwright/test';
import {allure} from "allure-playwright"
import {MainPage} from "../../pages/mainPage";
import {HeaderMenu} from "../../pages/componets/headerMenu";

test.describe("Authentication suite", () => {
    test("Log in with invalid data", async ({page}) => {
        allure.severity("blocker");
        allure.tag("smoke", "regress")
        allure.owner("RapDog64");
        allure.link({url: 'http://demowebshop.tricentis.com/', name: 'Staging'});
        allure.feature("Authentication feature");
        allure.story("Log in as a user with invalid credentials");

        const message = "Login was unsuccessful. Please correct the errors and try again. No customer account found";
        const email = "dsadsad@mail.ru";
        const password = "dsadsadsad";

        const mainPage = new MainPage(page);
        await mainPage.navigate();
        await mainPage.typeEmail(email);
        await mainPage.typePassword(password);
        await mainPage.clickLogin();
        await mainPage.verifyErrorMessage(message);
    })

    test("Log in with valid data", async ({page}) => {
        allure.severity("blocker");
        allure.owner("RapDog64");
        allure.link({url: 'http://demowebshop.tricentis.com/', name: 'Staging'});
        allure.feature("Authentication feature");
        allure.story("Log in as a user with valid credentials");

        const email = "test23@mail.ru";
        const password = "testtest";

        const mainPage = new MainPage(page)
        await mainPage.navigate();
        await mainPage.typeEmail(email);
        await mainPage.typePassword(password);
        await mainPage.clickLogin()

        const headerMenu = new HeaderMenu(page);
        await headerMenu.validateUserProfileEmail(email);
    })
});