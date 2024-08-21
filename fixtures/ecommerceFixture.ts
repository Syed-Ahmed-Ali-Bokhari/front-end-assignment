import {test as base} from '@playwright/test'
import {HomePage} from '../page-object-models/homePage'
import {Assertion} from '../page-object-models/assertion'


type ApqpFixtures = {
    homePage: HomePage
    assert: Assertion

}

export const test = base.extend<ApqpFixtures>({
    homePage: async ({page}, use) => {
        await use(new HomePage(page))
    },
    assert: async ({page}, use) => {
        await use(new Assertion(page))
    },

})
