
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
 git clone https://github.com/Syed-Ahmed-Ali-Bokhari/front-end-assignment.git
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

## Bonus Part

```
Syed Ahmed (ahmedbokhari7@gmail.com)
```# front-end-assignment


For the given test cases, here's we can structure a traditional test plan and test cases that should be automated but can also be executed manually if needed:

1. Login
Test Objective:
Verify that the login functionality works correctly with valid and invalid credentials.

Test Cases:
Test Case 1.1: Verify login with valid credentials.
Steps:
Navigate to the login page.
Enter a valid username and password.
Click the "Login" button.
Expected Result:
User should be redirected to the home page.
A successful login message should be displayed.
Test Case 1.2: Verify login with invalid credentials.
Steps:
Navigate to the login page.
Enter an invalid username or password.
Click the "Login" button.
Expected Result:
An error message should be displayed, and the user should not be logged in.



2. Sorting the Products
Test Objective:
Verify that the sorting functionality correctly sorts products based on the selected criteria (e.g., price, popularity, rating).

Test Cases:
Test Case 2.1: Verify sorting by price (Low to High).

Steps:
Navigate to the product listing page.
Select "Price: Low to High" from the sorting dropdown.
Expected Result:
Products should be sorted from the lowest price to the highest price.
Test Case 2.2: Verify sorting by popularity.

Steps:
Navigate to the product listing page.
Select "Popularity" from the sorting dropdown.
Expected Result:
Products should be sorted by popularity, with the most popular products displayed first.



3. Add Products from Landing Page
Test Objective:
Verify that products can be successfully added to the cart from the landing page.

Test Cases:
Test Case 3.1: Add a product to the cart.

Steps:
Navigate to the landing page.
Click on a product's "Add to Cart" button.
Expected Result:
The product should be added to the cart, and a confirmation message should be displayed.
The cart icon should update with the number of items.
Test Case 3.2: Add multiple products to the cart.

Steps:
Navigate to the landing page.
Click on the "Add to Cart" button for multiple products.
Expected Result:
All selected products should be added to the cart, and the cart icon should reflect the correct number of items.



4. Remove Product from Landing Page
Test Objective:
Verify that products can be removed from the cart directly from the landing page.

Test Cases:
Test Case 4.1: Remove a product from the cart.
Steps:
Add a product to the cart from the landing page.
Click the "Remove" button for the same product.
Expected Result:
The product should be removed from the cart, and the cart icon should update accordingly.
Test Case 4.2: Remove all products from the cart.
Steps:
Add multiple products to the cart.
Click the "Remove" button for each product.
Expected Result:
All products should be removed from the cart, and the cart should be empty.
Execution Strategy:
Automated Execution:

The above test cases will be automated using a test automation tool such as Selenium/playwright/cypress.
The scripts will cover the validation of the expected outcomes, ensuring the login, sorting, adding, and removing functionalities work as expected.
Manual Execution (If Needed):

In case of automation tool failure or specific scenarios requiring manual testing, the above test cases can be executed manually.
The tester should follow the steps outlined in each test case and verify that the actual results match the expected outcomes.
