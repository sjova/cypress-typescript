import { User } from '../../models';

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @param value
       * @example cy.dataCy('greeting')
       */
      dataCy(value: string): Chainable<JQuery<HTMLElement>>;

      /**
       * Check token in Local Storage
       * @param token
       */
      checkToken(token: string): void;

      /**
       * Login user with specified email and password
       * @param user
       */
      typeLogin(user: User): void;

      /**
       * Click on a link with a specific label
       * @param label
       */
      clickLink(label: string): Cypress.Chainable<JQuery<HTMLAnchorElement>>;

      /**
       * Get Session Storage
       * Returns the current value associated with the given key, or null if the given key does not exist in the list associated with the object.
       * @param key
       */
      getSessionStorage(key: string): void;

      /**
       * Set Session Storage
       * Sets the value of the pair identified by key to value, creating a new key/value pair if none existed for key previously.
       * @param key
       */
      setSessionStorage(key: string): void;
    }
  }
}
