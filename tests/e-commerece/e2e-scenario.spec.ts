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

    test.only('Login Scenario, Sorting Scenario, Add Product , Remove Product and Logout scenario', async ({page,homePage}) => {

        await homePage.login(envCredentials.email, envCredentials.password)
        await homePage.selectSortOption("Name (A to Z)")
        await homePage.selectProductDynamically()
        await homePage.addToCart()
        await homePage.removeFromCart()
    })

 
})
