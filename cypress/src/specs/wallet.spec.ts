import { WalletPage } from '../page-objects/wallet.po'
import { LoginPage } from '../page-objects/login.po'
import { BeneficiaryPage } from '../page-objects/beneficiary.po'


context('Validate each coin deposit capability with a mexican account', () => {
    let walletPage: WalletPage
    let loginPage: LoginPage
    let beneficiaryPage: BeneficiaryPage

    beforeEach(() => {
        walletPage = new WalletPage()
        loginPage = new LoginPage()
        beneficiaryPage = new BeneficiaryPage()

        walletPage.visit()
        loginPage.login(Cypress.env('mexemail'),Cypress.env('mexpassword'))
    })

    afterEach(() => {
        //I added this because i had issues running the tests and getting status 400(that should have been 401) for logging in too many times back to back.
        cy.wait(500)
    })

    it('Check Bitcoin', () => {

        walletPage.selectCurrency('btc')
        walletPage.clickActionDeposit()
        walletPage.confirmAlertMessage()
        walletPage.pressEsc()
    })
    it('Check BAT', () => {

        walletPage.selectCurrency('bat')
        walletPage.clickActionDeposit()
        walletPage.confirmAlertMessage()
        walletPage.pressEsc()
    })
    it('Check Bitcoin Cash', () => {

        walletPage.selectCurrency('bch')
        walletPage.clickActionDeposit()
        walletPage.confirmAlertMessage()
        walletPage.pressEsc()
    })
    it('Check Compound', () => {

        walletPage.selectCurrency('comp')
        walletPage.clickActionDeposit()
        walletPage.confirmAlertMessage()
        walletPage.pressEsc()
    })
    it('Check DAI', () => {

        walletPage.selectCurrency('dai')
        walletPage.clickActionDeposit()
        walletPage.confirmAlertMessage()
        walletPage.pressEsc()
    })
    it('Check Ether', () => {

        walletPage.selectCurrency('eth')
        walletPage.clickActionDeposit()
        walletPage.confirmAlertMessage()
        walletPage.pressEsc()
    })
    it('Check Litecoin', () => {

        walletPage.selectCurrency('ltc')
        walletPage.clickActionDeposit()
        walletPage.confirmAlertMessage()
        walletPage.pressEsc()
    })
    it('Check Mana', () => {

        walletPage.selectCurrency('mana')
        walletPage.clickActionDeposit()
        walletPage.confirmAlertMessage()
        walletPage.pressEsc()
    })
    it('Check TrueUSD', () => {

        walletPage.selectCurrency('tusd')
        walletPage.clickActionDeposit()
        walletPage.confirmAlertMessage()
        walletPage.pressEsc()
    })
    it('Check Tether USD', () => {

        walletPage.selectCurrency('usdt')
        walletPage.clickActionDeposit()
        walletPage.confirmAlertMessage()
        walletPage.pressEsc()
    })
    it('Check XRP', () => {

        walletPage.selectCurrency('xrp')
        walletPage.clickActionDeposit()
        walletPage.confirmAlertMessage()
        walletPage.pressEsc()
    })

    it('Adds a Beneficiary to the account', () => {

        beneficiaryPage.visit()
        beneficiaryPage.registerBeneficiary(//i dont have a transaction pin in order to properlly testt his feature
            'pablo',
            'emilio',
            'escobar',
            '1',
            'December',
            '1949',
            'Friendship',
            '10'
        )
    })

})
context('Validate each coin deposit capability with a argentinian account', () => {
    let walletPage: WalletPage
    let loginPage: LoginPage
    let beneficiaryPage: BeneficiaryPage

    beforeEach(() => {
        walletPage = new WalletPage()
        loginPage = new LoginPage()
        beneficiaryPage = new BeneficiaryPage()

        walletPage.visit()
        loginPage.login(Cypress.env('argemail'),Cypress.env('argpassword'))
    })

    afterEach(() => {
        cy.wait(50000)
    })

    it('Checks Bitcoin', () => {

        walletPage.selectCurrency('btc')
        walletPage.clickActionDeposit()
        walletPage.confirmAlertMessage()
        walletPage.pressEsc()
    })
    it('Checks BAT', () => {

        walletPage.selectCurrency('bat')
        walletPage.clickActionDeposit()
        walletPage.confirmAlertMessage()
        walletPage.pressEsc()
    })
    it('Checks Bitcoin Cash', () => {

        walletPage.selectCurrency('bch')
        walletPage.clickActionDeposit()
        walletPage.confirmAlertMessage()
        walletPage.pressEsc()
    })
    it('Checks Compound', () => {

        walletPage.selectCurrency('comp')
        walletPage.clickActionDeposit()
        walletPage.confirmAlertMessage()
        walletPage.pressEsc()
    })
    it('Checks DAI', () => {

        walletPage.selectCurrency('dai')
        walletPage.clickActionDeposit()
        walletPage.confirmAlertMessage()
        walletPage.pressEsc()
    })
    it('Checks Ether', () => {

        walletPage.selectCurrency('eth')
        walletPage.clickActionDeposit()
        walletPage.confirmAlertMessage()
        walletPage.pressEsc()
    })
    it('Checks Litecoin', () => {

        walletPage.selectCurrency('ltc')
        walletPage.clickActionDeposit()
        walletPage.confirmAlertMessage()
        walletPage.pressEsc()
    })
    it('Checks Mana', () => {

        walletPage.selectCurrency('mana')
        walletPage.clickActionDeposit()
        walletPage.confirmAlertMessage()
        walletPage.pressEsc()
    })
    it('Checks TrueUSD', () => {

        walletPage.selectCurrency('tusd')
        walletPage.clickActionDeposit()
        walletPage.confirmAlertMessage()
        walletPage.pressEsc()
    })
    it('Checks Tether USD', () => {

        walletPage.selectCurrency('usdt')
        walletPage.clickActionDeposit()
        walletPage.confirmAlertMessage()
        walletPage.pressEsc()
    })
    it('Checks XRP', () => {

        walletPage.selectCurrency('xrp')
        walletPage.clickActionDeposit()
        walletPage.confirmAlertMessage()
        walletPage.pressEsc()
    })

    it('Adds a Beneficiary to the account', () => {

        beneficiaryPage.visit()
        beneficiaryPage.registerBeneficiary(//i dont have a transaction pin in order to properlly testt his feature
            'pablo',
            'emilio',
            'escobar',
            '1',
            'December',
            '1949',
            'Friendship',
            '10'
        )
    })

})

