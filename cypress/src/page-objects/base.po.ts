export class UIComponent {
    navigateTo(relativeUrl: string) {
        return cy.visit(`${relativeUrl}`)
    }

    findElement(testId: string) {
        return cy.get(`[id="${testId}"]`)
    }
    findGenericElement(element: string) {
        return cy.get(element, { timeout: 30000 })
    }
    findElementByType(type: string) {
        return cy.get(`[type="${type}"]`)
    }

    findElementByClassAndContent(classtype: string, content: string) {
        return cy.get(`${classtype}`).contains(`${content}`)
    } _

    readInputValue(testId: string) {
        return this.findElement(testId).then($input => $input.val())
    }

    writeInputValue(text: string, testId: string) {
        return this.findElement(testId).clear().type(text)
    }

    readElementText(testId: string) {
        return this.findGenericElement(testId).then($element => $element.text())
    }
    readGenericElementText(testId: string) {
        return this.findGenericElement(testId).then($element => $element.text())
    }

    pressEnter() {
        return cy.type('{enter}')
    }
    pressEsc() {
        return cy.get('body').type('{esc}')
    }

}

export class BasePage extends UIComponent {
    constructor(private pageRelativeUrl: string) {
        super()
    }

    visit() {
        return cy.forceVisit(this.pageRelativeUrl)
    }

    shouldBeOpen() {
        return cy.url().should('include', this.pageRelativeUrl)
    }
}
