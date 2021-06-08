# cypress-typescript

Cypress TypeScript Project

## System Requirements

Operating System: **macOS Catalina 10.15.7 (19H1217)**

IDE: **Visual Studio Code 1.56.2**

```
git --version
git version 2.32.0

nvm --version
0.38.0

node --version
v14.17.0

npm --version
6.14.13

yarn --version
1.22.10
```

## Getting Started

Initially, you need to run `yarn install`. After that, you can execute Cypress with one of these two npm scripts: `yarn cy:open` or `yarn cy:run`.

## Visual Studio Code

TODO: Will add more details

## ESLint, Prettier, Husky

TODO: Will add more details

## Cypress Integration Tests

- `cypress/integration/examples/*.spec.js` - some sample tests around key Cypress concepts
- `cypress/integration/playground/*.spec.js` - some playground tests

## Cypress Test Structure

The test interface, borrowed from [Mocha](https://docs.cypress.io/guides/references/bundled-tools#Mocha), provides `describe()`, `context()`, `it()` and `specify()`.

`context()` is identical to `describe()` and `specify()` is identical to `it()`.

We will use `describe()` and `it()` in our tests.

## Cypress Config

```json
{
  "$schema": "https://on.cypress.io/cypress.schema.json",
  "baseUrl": "http://localhost:8080",
  "ignoreTestFiles": ["**/examples/*.spec.js", "**/playground/*.spec.js"]
}
```

## Cypress Cache Command

- `npx cypress cache path` - Print the `path` to the Cypress cache folder
- `npx cypress cache list` - Print all existing installed versions of Cypress
- `npx cypress cache clear` - Clear the contents of the Cypress cache
- `npx cypress cache prune` - Deletes all installed Cypress versions from the cache except for the currently installed version

## Revisit ESLint Rules

```json
"@typescript-eslint/ban-ts-comment": "off",
"@typescript-eslint/no-empty-function": "off",
"@typescript-eslint/no-unused-vars": "off"

"cypress/no-unnecessary-waiting": "off"
```
