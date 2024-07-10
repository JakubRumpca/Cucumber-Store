import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from "@playwright/test";
import { pageFixture } from "../pageFixture";
import * as dotenv from "dotenv";
dotenv.config()

Given('the user is on the login page', async function () {
    await pageFixture.page.goto('https://www.saucedemo.com/');
});

When('the user enters the {string} user credentials', async function (user) {
    let username = process.env.STANDARD_USER as string;
    if (user == "locked") {
        username = process.env.LOCKED_USER as string;
    }
    await pageFixture.page.locator('[data-test="username"]').fill(username);
    await pageFixture.page.locator('[data-test="password"]').fill(process.env.PASSWORD as string);
    await pageFixture.page.locator('[data-test="login-button"]').click();
});

Then('the user is redirected to the home page', async function () {
    await expect(pageFixture.page.locator('[data-test="title"]')).toContainText('Products');
});

Then('the user sees an error message', async function () {
    await expect(pageFixture.page.locator('[data-test="error"]')).toContainText('Epic sadface: Sorry, this user has been locked out.');
});
