import {GenderOptions} from "./genderOptions";

export class UserRegister {
    private _gender: GenderOptions;
    private _firstName: string;
    private _lastName: string;
    private _userEmail: string;
    private _userPassword: string;
    private _confirmPassword: string;

    get gender(): GenderOptions {
        return this._gender;
    }
    set gender(value: GenderOptions) {
        this._gender = value;
    }
    get firstName(): string {
        return this._firstName;
    }
    set firstName(value: string) {
        this._firstName = value;
    }
    get lastName(): string {
        return this._lastName;
    }
    set lastName(value: string) {
        this._lastName = value;
    }
    get userEmail(): string {
        return this._userEmail;
    }
    set userEmail(value: string) {
        this._userEmail = value;
    }
    get userPassword(): string {
        return this._userPassword;
    }
    set userPassword(value: string) {
        this._userPassword = value;
    }
    get confirmPassword(): string {
        return this._confirmPassword;
    }
    set confirmPassword(value: string) {
        this._confirmPassword = value;
    }
}