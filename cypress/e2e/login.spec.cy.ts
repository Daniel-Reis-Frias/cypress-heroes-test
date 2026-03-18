import userData from '../fixtures/userData.json'
import { LoginPage } from '../pages/loginPage'

const loginPage = new LoginPage()

describe('Cy_heroes_test', () => {



  it('login_success', () => {
    loginPage.visit()
    loginPage.openLoginModal()
    loginPage.fillEmail(userData.userAdmin.email)
    loginPage.fillPassword(userData.userAdmin.password)
    loginPage.submit()
    loginPage.logout()
  })

  it('login fail', () => {
    loginPage.visit()
    cy.get(loginPage.selectorsList().likeButton).first().click()
    cy.contains('You must log in to like.')
    cy.get('button').contains('Ok').click()
    cy.contains('You must log in to like.').should('not.exist')
    cy.get(loginPage.selectorsList().moneyButton).first().click()
    cy.contains('You must log in to hire this hero.')
    cy.get('button').contains('Ok').click()
    cy.contains('You must log in to hire this hero.').should('not.exist')
    cy.contains('button', 'Login').click()
    cy.get(loginPage.selectorsList().emailField).type(userData.userRegular.email)
    cy.get(loginPage.selectorsList().passwordField).type(userData.userRegular.password)
    cy.contains('button', 'Sign in').click()
    cy.contains("Invalid email or password")
    cy.get(loginPage.selectorsList().emailField).clear()
    cy.get(loginPage.selectorsList().passwordField).clear()
    cy.contains('button', 'Sign in').click()
    cy.contains("Email is required")

  })


  it('Deve aumentar o número de fãs ao clicar em Like em todos os heróis', () => {

    loginPage.visit()
    loginPage.openLoginModal()
    loginPage.fillEmail(userData.userAdmin.email)
    loginPage.fillPassword(userData.userAdmin.password)
    loginPage.submit()

    cy.get(loginPage.selectorsList().heroCard).each(($card) => {

      cy.wrap($card).within(() => {
        cy.get(loginPage.selectorsList().fans)
          .invoke('text')
          .then((textoInicial) => {
            const fansInicial = parseInt(textoInicial)

            cy.get(loginPage.selectorsList().likeButton).click()

            cy.get(loginPage.selectorsList().fans)
              .should(($el) => {
                const fansFinal = parseInt($el.text())
                expect(fansFinal).to.eq(fansInicial + 1)
              })
          })
      })
    })

  })

  it('Contratar todos os Heróis', () => {
    loginPage.visit()
    loginPage.openLoginModal()
    loginPage.fillEmail(userData.userAdmin.email)
    loginPage.fillPassword(userData.userAdmin.password)
    loginPage.submit()

    cy.get(loginPage.selectorsList().heroCard).each((_$card, index) => {

      cy.get(loginPage.selectorsList().heroCard).eq(index)
        .find('[data-cy="saves"]')
        .invoke('text')
        .then((texto) => {
          const savesInicial = parseInt(texto)


          cy.get(loginPage.selectorsList().heroCard).eq(index)
            .find(loginPage.selectorsList().moneyButton)
            .click()

          cy.contains('h3', 'Hire Hero?').should('be.visible')
          cy.contains('button', 'Yes').click()


          cy.contains('h3', 'Hire Hero?').should('not.exist')

          cy.get(loginPage.selectorsList().heroCard).eq(index)
            .find('[data-cy="saves"]')
            .should(($el) => {
              const savesFinal = parseInt($el.text())
              expect(savesFinal).to.eq(savesInicial + 1)
            })
        })
    })
  })




})

describe('Create Hero', () => {

  const loginAndGoToCreate = () => {
    loginPage.visit()
    loginPage.openLoginModal()
    loginPage.fillEmail(userData.userAdmin.email)
    loginPage.fillPassword(userData.userAdmin.password)
    loginPage.submit()
    cy.contains('button', 'Create New Hero').click()
    cy.url().should('include', '/heroes/new')
  }

  it('Deve exibir erros de validação ao submeter o formulário vazio', () => {
    loginAndGoToCreate()

    cy.contains('button', 'Submit').click()

    cy.contains('Name is required').should('be.visible')
    cy.contains('Price is required').should('be.visible')
    cy.contains('Fans is required').should('be.visible')
    cy.contains('Saves is required').should('be.visible')
    cy.contains('Powers is required').should('be.visible')
  })

  it('Deve criar um novo herói com sucesso e redirecionar para a lista', () => {
    loginAndGoToCreate()

    cy.get('[data-cy="nameInput"]').type('Cyber Hawk')
    cy.get('[data-cy="priceInput"]').type('500')
    cy.get('[data-cy="fansInput"]').type('100')
    cy.get('[data-cy="savesInput"]').type('42')

    cy.get('[data-cy="powersSelect"]').find('option').first().then(($option) => {
      const powerValue = $option.val() as string
      cy.get('[data-cy="powersSelect"]').select(powerValue)
    })

    cy.contains('button', 'Submit').click()

    cy.url().should('include', '/heroes')
    cy.url().should('not.include', '/heroes/new')

    cy.contains('[data-cy="hero-card"]', 'Cyber Hawk').should('exist')
  })

  it('Não deve exibir o botão "Create New Hero" para usuário não-admin', () => {
    loginPage.visit()
    loginPage.openLoginModal()
    loginPage.fillEmail(userData.userRegular.email)
    loginPage.fillPassword(userData.userRegular.password)
    loginPage.submit()
    cy.contains('button', 'Create New Hero').should('not.exist')
  })

})