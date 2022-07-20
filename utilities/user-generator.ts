import {faker} from '@faker-js/faker';
import {UserRegister} from "../models/userRegister";
import {GenderOptions} from "../models/genderOptions";

export class UserGenerator {

    public static generateRandomUser(gender: GenderOptions): UserRegister {
        const generatedPassword = faker.internet.password();
        const newUser = new UserRegister();
        newUser.firstName = faker.name.firstName();
        newUser.gender = gender;
        newUser.lastName = faker.name.lastName();
        newUser.userEmail = faker.internet.email();
        newUser.userPassword = generatedPassword;
        newUser.confirmPassword = generatedPassword;
        return newUser;
    }
}