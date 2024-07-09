import { When, Then } from '@cucumber/cucumber';
import { By, Select } from 'selenium-webdriver';
import { expect } from 'chai';

When('the user sorts products by name in {string} order', async function (order) {
    const selectElement = await this.driver.findElement(By.css('[data-test="product-sort-container"]'))
    const select = new Select(selectElement)
    const optionValue = (order == "ascending") ? "az" : "za";
    await select.selectByValue(optionValue);
});

When('the user sorts products by price in {string} order', async function (order) {
    const selectElement = await this.driver.findElement(By.css('[data-test="product-sort-container"]'))
    const select = new Select(selectElement)
    const optionValue = (order == "ascending") ? "lohi" : "hilo";
    await select.selectByValue(optionValue);
});

Then('the active sorting option should be {string}', async function (sortingOption) {
    const selectedOption = await this.driver.findElement(By.css('[data-test="active-option"]')).getText();
    expect(selectedOption).to.equal(sortingOption);
});

Then('the first product on the list should be {string}', async function (firstProduct) {
    const firstProductName = await this.driver.findElement(By.css('[data-test="inventory-item-name"]')).getText();
    expect(firstProductName).to.equal(firstProduct);
});
