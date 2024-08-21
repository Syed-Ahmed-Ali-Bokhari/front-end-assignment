import {expect, Page} from '@playwright/test'
import {BasePage} from './basePage'

/**
 * Library of assertions to be called in page-object-models and specs.
 *
 * Functions implemented in this class must be generic and not specific to
 * app functionality.
 */

export class Assertion extends BasePage {

    constructor(page: Page) {
        super(page)
    }

    async shouldContainPageTitle(pageTitle: string): Promise<void> {
        expect.soft(await this._page.title(), 'The page title does not match').toContain(pageTitle)
    }

    async shouldContainUrl(url: string): Promise<void> {
        expect.soft(this._page.url(), 'The url does not match').toContain(url)
    }

    async shouldNotContainUrl(url: string): Promise<void> {
        expect.soft(this._page.url(), 'The url does not match').not.toContain(url)
    }

    async shouldBeVisible(locator: string): Promise<void> {
        await expect.soft(this._page.locator(locator), 'The locator is not visible when it should be').toBeVisible()
    }

    async shouldNotBeVisible(locator: string): Promise<void> {
        await expect.soft(this._page.locator(locator), 'The locator is visible when it should not be').not.toBeVisible()
    }

}
