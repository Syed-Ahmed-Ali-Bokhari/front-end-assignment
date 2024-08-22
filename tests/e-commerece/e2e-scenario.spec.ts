import {test} from '../../fixtures/ecommerceFixture'
import {credentials} from '../../data/credentials/credentials'




test.describe('@e2e1', () => {

    const envCredentials = credentials


    test.beforeEach(async ({page}) => {
        await page.goto('/', {waitUntil: 'networkidle'})
    })

    test.afterEach(async ({page,homePage}) => {
        await homePage.signOut()
        await page.close()
    })
    //test.use({storageState: 'context/adminContext.json'})

      test('Login Scenario', async ({ page, homePage }) => {
        await homePage.login(envCredentials.email, envCredentials.password);
    });
    
    test('Sorting Scenario', async ({ page, homePage }) => {
        await homePage.login(envCredentials.email, envCredentials.password); // Ensure login before sorting
        await homePage.selectSortOption("Name (A to Z)");
    });
    
    test('Add Product Scenario', async ({ page, homePage }) => {
        await homePage.login(envCredentials.email, envCredentials.password); // Ensure login before adding product
        await homePage.selectProductDynamically();
        await homePage.addToCart();
    });
    
    test('Remove Product Scenario', async ({ page, homePage }) => {
        await homePage.login(envCredentials.email, envCredentials.password); // Ensure login before removing product
        await homePage.selectProductDynamically();
        await homePage.addToCart();
        await homePage.removeFromCart();
    });
    
    test('Logout Scenario', async ({ page, homePage }) => {
        await homePage.login(envCredentials.email, envCredentials.password); // Ensure login before logout
    });

 
})
