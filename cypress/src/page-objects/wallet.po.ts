import { BasePage } from './base.po'

export class WalletPage extends BasePage {
    constructor() {
        super('/wallet')
    }

    selectCurrency(content: string) {
        cy.url().should('include', 'bitso.com/wallet', { timeout: 15000 })
        cy.get(`[class ="Container__StyledContainer-sc-1nmtyg4-0 BcfYm styles__StyledContainer-go4zwh-7 cUlkaT"]`).within(() => {
            cy.contains(content).click()
        })
    }

    clickActionDeposit() {
        cy.intercept('GET', `/api/v3/funding_methods/*`).as('requestCurrency')

        cy.get('.bdGJMw > .Container__StyledContainer-sc-1nmtyg4-0').contains('Deposit').click()

        cy.wait('@requestCurrency', { timeout: 30000 })
            .then(({ request, response }) => {
                cy.log(response.statusMessage)
                expect(response.statusCode).to.eq(200)
            })
    }

    clickActionSend() {
        cy.get('.bdGJMw > .Container__StyledContainer-sc-1nmtyg4-0').contains('Send').click()
    }

    clickActionConvert() {
        cy.get('.bdGJMw > .Container__StyledContainer-sc-1nmtyg4-0').contains('Convert').click()
    }

    confirmAlertMessage() {

        cy.get('[data-testid=helper-modal-onaccept-button]').should('be.visible')
        cy.get('.Typography__H3-qw5r90-2').invoke('text').then((tittle) => {
            expect(tittle).to.eq('Oops, something went wrong')
        })
        cy.get('.Typography__Small-qw5r90-8').invoke('text').then((text) => {
            expect(text).to.contain('This transaction exceeds your limit. Increase your account limit to continue')
        })
    }
}