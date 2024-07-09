import { Given, When, Then } from '@cucumber/cucumber';
import { By } from 'selenium-webdriver';
import { expect } from 'chai';
import * as dotenv from "dotenv";
dotenv.config()

Given('the user is on the login page', async function () {
    await this.driver.get('https://www.saucedemo.com/');
});

When('the user enters the {string} user credentials', async function (user) {
    let username;
    if (user == "standard") {
        username = process.env.STANDARD_USER;
    } else if (user == "locked") {
        username = process.env.LOCKED_USER;
    }
    await this.driver.findElement(By.css('[data-test="username"]')).sendKeys(username);
    await this.driver.findElement(By.css('[data-test="password"]')).sendKeys(process.env.PASSWORD);
    await this.driver.findElement(By.css('[data-test="login-button"]')).click();
});

Then('the user is redirected to the home page', async function () {
    const title = await this.driver.getTitle();
    expect(title).to.equal('Swag Labs', 'Title assertion failed!');
});

Then('the user sees an error message', async function () {
    const errorMsg = await this.driver.findElement(By.css('[data-test="error"]')).getText();
    expect(errorMsg).to.equal('Epic sadface: Sorry, this user has been locked out.');
});
