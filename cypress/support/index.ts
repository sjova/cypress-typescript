import { checkToken, clickLink, dataCy, getSessionStorage, setSessionStorage, typeLogin } from './commands';

Cypress.Commands.add('checkToken', checkToken);
Cypress.Commands.add('clickLink', clickLink);
Cypress.Commands.add('dataCy', dataCy);
Cypress.Commands.add('getSessionStorage', getSessionStorage);
Cypress.Commands.add('setSessionStorage', setSessionStorage);
Cypress.Commands.add('typeLogin', typeLogin);
