import { When, Then } from '@cucumber/cucumber';
import { expect } from "@playwright/test";
import { pageFixture } from "../pageFixture";

When('the user adds {string} to the cart', async function (product) {
    await pageFixture.page.locator(`[data-test="add-to-cart-sauce-labs-${product}"]`).click();
});

When('the user removes {string} from the cart', async function (product) {
    await pageFixture.page.locator(`[data-test="remove-sauce-labs-${product}"]`).click();
});

When('the user goes to the shopping cart page', async function () {
    await pageFixture.page.locator('[data-test="shopping-cart-link"]').click();
});

Then('the cart should contain {int} products', async function (number) {
    expect(await pageFixture.page.locator('[data-test="inventory-item"]').count()).toBe(number);

});

When('the user clicks on the {string} button', async function (button) {
    await pageFixture.page.locator(`[data-test="${button}"]`).click();
});

When('the user fills in the order details', async function () {
    await pageFixture.page.locator('[data-test="firstName"]').fill('John');
    await pageFixture.page.locator('[data-test="lastName"]').fill('Wick');
    await pageFixture.page.locator('[data-test="postalCode"]').fill('84-200');
});

Then('the order confirmation should be displayed', async function () {
    await expect(pageFixture.page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');
});
