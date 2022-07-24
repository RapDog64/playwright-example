import {type Page, test} from '@playwright/test';
import {RegisterForm} from "../../pages/componets/registerForm";
import {GenderOptions} from "../../models/genderOptions";
import {UserGenerator} from "../../utilities/user-generator";
import {HeaderMenu} from "../../pages/componets/headerMenu";
import {allure} from "allure-playwright";

test.describe("User Registration Suite", () => {
    test("User is able to register a new account with valid data @smoke @regular", async ({page}) => {
        allure.severity("blocker");
        allure.tag("smoke", "regress", "UI")
        allure.owner("RapDog64");
        allure.link({url: 'http://demowebshop.tricentis.com/register', name: 'Staging'});
        allure.feature("Registration");
        allure.story("Registration a new user");
        allure.description("Register a new user via UI");

        const expectedRegistrationMessage = "Your registration completed";
        const registerForm = new RegisterForm(page);
        const headerMenu = new HeaderMenu(page);
        const generatedUser = UserGenerator.generateRandomUser(GenderOptions.MALE);

        await registerForm.navigate();
        await registerForm.chooseGender(generatedUser.gender);
        await registerForm.typeFirstName(generatedUser.firstName);
        await registerForm.typeLastName(generatedUser.lastName);
        await registerForm.typeNewUserEmail(generatedUser.userEmail);
        await registerForm.typeUserPassword(generatedUser.userPassword);
        await registerForm.typeConfirmPassword(generatedUser.confirmPassword);
        await registerForm.getSuccessfulRegistrationMessage(expectedRegistrationMessage);

        await headerMenu.validateUserProfileEmail(generatedUser.userEmail);
    })
});