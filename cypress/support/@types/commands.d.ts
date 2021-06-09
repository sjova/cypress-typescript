import { User } from '../../models';

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Adds two numbers asynchronously
       *
       * @param {number} a
       * @param {number} b
       * @example
       *    cy.asyncAdd(2, 3).should('equal', 5)
       */
      asyncAdd(a: number, b: number): void;

      /**
       * Check token in Local Storage
       *
       * @param {string} token - Token name
       * @example
       *    cy.checkToken('abc123')
       */
      checkToken(token: string): void;

      /**
       * Click on a link with a specific label
       *
       * @param {string} label - Link label
       * @example
       *    cy.clickLink('Buy Now')
       */
      clickLink(label: string): Cypress.Chainable<JQuery<HTMLAnchorElement>>;

      /**
       * Select DOM element by data-cy attribute
       *
       * @param {string} value - Attribute value
       * @example
       *    cy.dataCy('greeting')
       */
      dataCy(value: string): Chainable<JQuery<HTMLElement>>;

      /**
       * Get Session Storage - Returns the current value associated with the given key,
       * or null if the given key does not exist in the list associated with the object.
       *
       * @param {string} key - Key name
       * @example
       *    cy.getSessionStorage('abc123')
       */
      getSessionStorage(key: string): void;

      /**
       * Set Session Storage - Sets the value of the pair identified by key to value,
       * creating a new key/value pair if none existed for key previously.
       *
       * @param {string} key - Key name
       * @example
       *    cy.setSessionStorage('abc123')
       */
      setSessionStorage(key: string): void;

      /**
       * Login user with specified email and password
       *
       * @param {User} user - User object
       * @example
       *    cy.typeLogin({ email: 'fake@email.com', password: 'Secret1' })
       */
      typeLogin(user: User): void;
    }
  }
}
