import type {PlaywrightTestConfig} from '@playwright/test';
import {devices} from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
    testDir: './tests',
    timeout: 30 * 1000,
    expect: {
        /**
         * Maximum time expect() should wait for the condition to be met.
         * For example in `await expect(locator).toHaveText();`
         */
        timeout: 5000
    },
    fullyParallel: false,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: [['line'], ['allure-playwright', {
        detail: true,
        suiteTitle: true
    }]],
    use: {
        headless: true,
        /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
        actionTimeout: 0,
        baseURL: 'http://demowebshop.tricentis.com',
        screenshot: 'only-on-failure',
        trace: 'on-first-retry',
        video: 'off'
    },

    /* Configure projects for major browsers */
    projects: [
        {
          name: 'Google Chrome',
          use: {
            channel: 'chrome',
          },
        },
    ],
};

export default config;
