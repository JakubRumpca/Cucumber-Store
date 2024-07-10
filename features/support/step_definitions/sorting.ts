import { When, Then } from '@cucumber/cucumber';
import { expect } from "@playwright/test";
import { pageFixture } from "../pageFixture";

When('the user sorts products by name in {string} order', async function (order) {
    const optionValue = (order == "ascending") ? "az" : "za";
    await pageFixture.page.locator('[data-test="product-sort-container"]').selectOption(optionValue);
});

When('the user sorts products by price in {string} order', async function (order) {
    const optionValue = (order == "ascending") ? "lohi" : "hilo";
    await pageFixture.page.locator('[data-test="product-sort-container"]').selectOption(optionValue);
});

Then('the active sorting option should be {string}', async function (sortingOption) {
    await expect(pageFixture.page.locator('[data-test="active-option"]')).toContainText(sortingOption);
});

Then('the first product on the list should be {string}', async function (firstProduct) {
    await expect(pageFixture.page.locator('[data-test="inventory-item-name"]').first()).toContainText(firstProduct);
});
