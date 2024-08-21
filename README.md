
## Getting Started

This project demonstrates an end-to-end (E2E) test for an e-commerce application using Playwright's test framework. The test covers multiple scenarios, including logging in, sorting products, adding a product to the cart, removing a product from the cart, and logging out.

Test Suite Declaration:

The test suite is named @e2e1, categorizing it as part of the first set of E2E tests.
envCredentials stores the credentials used for login.
Test Lifecycle Hooks:

beforeEach: This hook navigates to the application's homepage before each test runs, waiting for the network to be idle, ensuring that the page is fully loaded.
afterEach: This hook signs out of the application and closes the page after each test, ensuring a clean state for subsequent tests.

Test Case:
The test.only method ensures that only this test runs when executing the test suite.
Scenarios Covered:
Login: The user logs in using the provided email and password from envCredentials.
Sorting Products: The product list is sorted by "Name (A to Z)".
Adding a Product to the Cart: A product is selected dynamically and added to the shopping cart.
Removing a Product from the Cart: The added product is then removed from the cart.
Logout: The user logs out after performing the above actions.

Summary:
The script automates key user flows in an e-commerce application, ensuring that essential functionalities like login, sorting, adding, and removing products work as expected. It’s an integral part of the E2E testing strategy for validating the user experience.


These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

Please have the following installed.

```
1. Git

2. Typescript

3. Node

4. NPM
```

### Installing

```
[ git clone https://github.com/Syed-Ahmed-Ali-Bokhari/front-end-assignment](https://github.com/Syed-Ahmed-Ali-Bokhari/front-end-assignment.git)
```

From the root directory, type -

```
npm install
```

## Running the tests

From the root directory, type -

```
npx playwright test
```

```
npm run test:e2e
```

## Contributing

```
Syed Ahmed (ahmedbokhari7@gmail.com)
```# front-end-assignment
