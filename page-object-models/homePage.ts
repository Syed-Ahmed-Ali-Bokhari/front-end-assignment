import {Assertion} from './assertion'
import {BasePage} from './basePage'
import {expect, Page} from '@playwright/test'

const addToCartBtn = 'button:has-text("ADD TO CART")'
const removeCartBtn = 'button:has-text("REMOVE")'

/**
 * Library of functions for the E-Commerece Applicaiton.
 *
 */

export class HomePage extends BasePage {

    constructor(page: Page) {
        super(page)
    }

    assert = new Assertion(this._page)




    async selectProductDynamically(): Promise<void> {
        // Locate the product elements and save them in an array
        const productElements = this._page.locator('div#inventory_container a div');
    
        // Count the number of product elements
        const count = await productElements.count();
    
        // Initialize an array to hold the text content of the products
        const productTitlesArray: string[] = [];
    
        // Loop through the elements, store them in an array, and print the titles
        for (let i = 0; i < count; i++) {
            const productText = await productElements.nth(i).textContent();
            if (productText) {
                productTitlesArray.push(productText); // Save the text content in the array
                console.log(`Product ${i + 1}: ${productText}`); // Print the text content
            }
        }
    
        // Optionally, print the entire array of product titles
        console.log('All product titles:', productTitlesArray);
    
        // Verify that the array is sorted in ascending order
        const isSorted = productTitlesArray.every((value, index, array) => {
            return index === 0 || array[index - 1].localeCompare(value) <= 0;
        });
    
        // Print the result of the verification
        if (isSorted) {
            console.log('The product titles are in ascending order.');
        } else {
            console.log('The product titles are not in ascending order.');
        }
    
        // Optionally, you can use an assertion to ensure the titles are in ascending order
        await expect(isSorted).toBe(true);
    }

    async addToCart(): Promise<void> {
        await this._page.locator(addToCartBtn).first().click()
        await this._page.locator(removeCartBtn).first().isVisible()

    }

    async removeFromCart(): Promise<void> {
        await this._page.locator(removeCartBtn).first().click()
        await this._page.locator(addToCartBtn).first().isVisible()

    }
    
    async selectSortOption(optionText: string): Promise<void> {
        // Locate the dropdown container
        const dropdown = this._page.locator('.product_sort_container');
    
        // Select the option based on the visible text
        await dropdown.selectOption({ label: optionText });
    
        // Optionally, you can add a validation step to confirm the selection
        const selectedOption = await dropdown.inputValue();
        const selectedText = await dropdown.locator(`option[value="${selectedOption}"]`).textContent();
        console.log(`Selected option: ${selectedText}`);
        
        await expect(selectedText).toBe(optionText);
    }

}
