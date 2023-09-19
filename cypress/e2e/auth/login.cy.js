/// <reference types="cypress"/>

describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('https://portal.poweredbypeople.com/login');
  });

  it('should load the login page', () => {
    cy.url().should('include', '/login');
  });

  it('should login a user with valid credentials', () => {
    const emailSelector = '[data-cy="email-input"]';
    const passwordSelector = '[data-cy="password-input"]';
    const loginButtonSelector = '[data-cy="login-btn"]';
    
    const validEmail = 'bahatimary745@gmail.com';
    const validPassword = 'Bahati2018!';

    cy.get(emailSelector).type(validEmail);
    cy.get(passwordSelector).type(validPassword);
    cy.get(loginButtonSelector).click();

    cy.url().should('include', '/company-setup'); // Navigate to another page

    // Validate that a new page has been visited and assert present elements
    cy.get('h2').should('contain', 'Welcome! Tell us a little about your business');
  });
});
