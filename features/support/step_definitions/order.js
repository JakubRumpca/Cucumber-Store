import { When, Then } from '@cucumber/cucumber';
import { By } from 'selenium-webdriver';
import { expect } from 'chai';

When('the user adds {string} to the cart', async function (product) {
    await this.driver.findElement(By.css(`[data-test="add-to-cart-sauce-labs-${product}"]`)).click();
});

When('the user removes {string} from the cart', async function (product) {
    await this.driver.findElement(By.css(`[data-test="remove-sauce-labs-${product}"]`)).click();
});

When('the user goes to the shopping cart page', async function () {
    await this.driver.findElement(By.css('[data-test="shopping-cart-link"]')).click();
});

Then('the cart should contain {int} products', async function (number) {
    const cartItems = await this.driver.findElements(By.css('[data-test="inventory-item"]'));
    expect(cartItems.length).to.equal(number);
});

When('the user clicks on the {string} button', async function (button) {
    await this.driver.findElement(By.css(`[data-test="${button}"]`)).click();
});

When('the user fills in the order details', async function () {
    await this.driver.findElement(By.css('[data-test="firstName"]')).sendKeys('John');
    await this.driver.findElement(By.css('[data-test="lastName"]')).sendKeys('Wick');
    await this.driver.findElement(By.css('[data-test="postalCode"]')).sendKeys('84-200');
});

Then('the order confirmation should be displayed', async function () {
    const confirmationMsg = await this.driver.findElement(By.css('[data-test="complete-header"]')).getText();
    expect(confirmationMsg).to.equal('Thank you for your order!');
});
