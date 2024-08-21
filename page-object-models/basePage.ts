import {expect, Page} from '@playwright/test'



const userNameField = '#user-name'
const passwordField = '#password'
const homeButton = '.app_logo'
const signInBtn = '#login-button'
const logInBtn = 'button[routerlink="/auth"]'
const signOutBtn = '#logout_sidebar_link'
const openMenuBtn = 'button:has-text("Open Menu")'

/**
 * Library of functions that perform actions on common components.
 *
 * This class should be inherited by all page-object-models.
 *
 * Only functions dealing with common components should be placed here.
 */

export class BasePage {

    protected _page: Page

    constructor(page: Page) {
        this._page = page
    }

    async login(username: string, password: string): Promise<void> {
        await this._page.fill(userNameField, username)
        await this._page.fill(passwordField, password)
        await this._page.click(signInBtn)
        await expect(this._page.locator(homeButton)).toBeVisible()

    }

    async clickLogin(): Promise<void> {
        await this._page.locator(logInBtn).waitFor()
        await this._page.locator(logInBtn).click()
    }

    async signOut(): Promise<void> {

        await this._page.locator(openMenuBtn).click()
        await this._page.locator(signOutBtn).click()
    }


}

export interface StoredData {
    number: string
}
