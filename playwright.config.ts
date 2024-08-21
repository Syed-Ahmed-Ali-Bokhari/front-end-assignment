import {PlaywrightTestConfig} from '@playwright/test'

const config: PlaywrightTestConfig = {
    expect: {
        timeout: 60 * 1000,
    },
    testDir: 'tests',
    testMatch: '*.spec.ts',
    reporter: [
        ['list'],
        ['html', {open: 'never'}]
    ],
    timeout: 1880 * 1000,
    reportSlowTests: null,
    // globalSetup: require.resolve('./createContext'),
    snapshotPathTemplate: 'data/screenshots/{testFileDir}/{arg}{ext}',
    use: {
        baseURL: 'https://www.saucedemo.com/v1/index.html',
        browserName: 'chromium',
        headless: false,
        video: 'on',
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
        bypassCSP: true,
        launchOptions: {
            downloadsPath: 'test-results/downloads/',
            args: ['--disable-web-security', '--ignore-certificate-errors']
        },
        actionTimeout: 30 * 1000,
        navigationTimeout: 30 * 1000
    }
}
export default config
