import { BasePage } from './base.po'

export class LoginPage extends BasePage {
    constructor() {
        super('/login')
    }

    typeEmailOrId(emailOrId: string) {
        this.findElement('client_id').type(emailOrId)
    }

    typePassword(password: string) {
        this.findElement('password').type(password)
    }

    submitLogin() {
        this.findElementByType('submit').click()
    }

    login(emailOrId: string, password: string) {
        this.typeEmailOrId(emailOrId)
        this.typePassword(password)
        this.submitLogin()
    }

}