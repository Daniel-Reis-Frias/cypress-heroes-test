export class LoginPage {
    selectorsList() {
        const selectors: Record<string, string> = {
            emailField: '[data-cy="email"]',
            passwordField: '[data-cy="password"]',
            signInButton: '[data-cy="sign-in"]',
            logoutButton: '[data-cy="logout"]',
            heroCard: '[data-cy="hero-card"]',
            fans: '[data-cy="fans"]',
            likeButton: '[data-cy="like"]',
            moneyButton: '[data-cy="money"]',
        }
        return selectors
    }



    visit() {
        cy.visit('http://localhost:3000/heroes')
    }

    openLoginModal() {
        cy.contains('button', 'Login').click()
    }

    fillEmail(email: string) {
        cy.get(this.selectorsList().emailField).type(email)
    }

    fillPassword(password: string) {
        cy.get(this.selectorsList().passwordField).type(password)
    }

    submit() {
        cy.contains('button', 'Sign in').click()
    }

    logout() {
        cy.contains('button', 'Logout').click()
    }

    login(email: string, password: string) {
        this.openLoginModal()
        this.fillEmail(email)
        this.fillPassword(password)
        this.submit()
    }
}

export const loginPage = new LoginPage()
