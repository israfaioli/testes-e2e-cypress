describe('Login', () => {
  it('successfully logs in', () => {
    const username = Cypress.env('USER_EMAIL')
    const password = Cypress.env('USER_PASSWORD')
    cy.guiLogin(username, password)
  })
})