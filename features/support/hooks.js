import { Before, After } from '@cucumber/cucumber';
import { Builder } from 'selenium-webdriver';

let driver;

Before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
    this.driver = driver;
});

After(async function () {
    if (driver) {
        await driver.quit();
    }
});
