import {type Page, test} from '@playwright/test';
import {MainPage} from "../../pages/mainPage";
import {HeaderMenu} from "../../pages/componets/headerMenu";
import {SearchResultPage} from "../../pages/searchResultPage";
import {allure} from "allure-playwright";

test.describe("Search products", () => {
    test("Searched product is displayed in the result list", async ({page}) => {
        allure.severity("blocker");
        allure.tag("smoke", "regress")
        allure.owner("RapDog64");
        allure.link({url: 'http://demowebshop.tricentis.com/', name: 'Staging'});
        allure.feature("Product search");
        allure.story("unauthorized user is able to search a product");
        allure.description("Searched product is displayed in the result list")

        const productName = "Build your own computer";
        const mainPage = new MainPage(page);
        await mainPage.navigate();

        const headerMenu = new HeaderMenu(page);
        await headerMenu.typeProductByName(productName);
        await headerMenu.clickSearchButton();

        const searchResultPage = new SearchResultPage(page);
        await searchResultPage.validateSearchKeyword(productName);
        await searchResultPage.validateProductIsDisplayedInResultList(productName);
    })

    test("The result list is empty if product doesn't exist", async ({page}) => {
        allure.severity("blocker");
        allure.tag("smoke", "regress")
        allure.owner("RapDog64");
        allure.link({url: 'http://demowebshop.tricentis.com/', name: 'Staging'});
        allure.feature("Product search");
        allure.story("unauthorized user is able to search a product");
        allure.description("The result list is empty if product doesn't exist")

        const productName = "lfglawlrjkfadsf"
        const noProductsFoundMessage = "No products were found that matched your criteria."

        const mainPage = new MainPage(page);
        await mainPage.navigate();
        const headerMenu = new HeaderMenu(page);
        await headerMenu.typeProductByName(productName);
        await headerMenu.clickSearchButton();

        const searchResultPage = new SearchResultPage(page);
        await searchResultPage.validateSearchKeyword(productName);
        await searchResultPage.validateResultListEmpty(noProductsFoundMessage);
    })
});