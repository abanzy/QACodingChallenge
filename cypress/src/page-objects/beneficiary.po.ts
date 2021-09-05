import { BasePage } from './base.po'

export class BeneficiaryPage extends BasePage {
    constructor() {
        super('/r/user/beneficiaries/add')
    }
    typenames(names: string) {
        cy.get('#first_name').type(names)
    }

    typelastName(lastName: string) {
        cy.get('#last_name').type(lastName)
    }

    typeSecondName(secondName: string) {
        cy.get('#second_last_name').type(secondName)
    }
    pickDay(day: string) {
        cy.get('#day').click()
        cy.get('.css-1cloi1t').within(() => {
            cy.contains(day).click()
        })
    }

    pickMonth(month: string) {
        cy.get('#month').click()
        cy.get('.css-1cloi1t').within(() => {
            cy.contains(month).click()
        })
    }

    pickYear(year: string) {
        cy.get('#year').click().type(year)
        cy.get('.css-1cloi1t').within(() => {
            cy.contains(year).click()
        })
    }

    pickKinship(kin: string) {
        cy.get('.gLhA-DK > .css-m0do4z > .css-16ljna5').click()
        cy.get('.css-1cloi1t').within(() => {
            cy.contains(kin).click()
        })
    }

    typeBenefitPercentage(percentage: string) {
        cy.get('#percentage').type(percentage)
    }

    submitBenefit() {
        cy.get('[data-testid=add-beneficiary-button]').click()
    }

    registerBeneficiary(names: string, lastName: string, secondName: string,day: string, month: string, year: string, kinship: string, percentage: string) {
        this.typenames(names)
        this.typelastName(lastName)
        this.typeSecondName(secondName)
        this.pickDay(day)
        this.pickMonth(month)
        this.pickYear(year)
        this.pickKinship(kinship)
        this.typeBenefitPercentage(percentage)
        this.submitBenefit()
    }

}