import { Before, After } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "playwright";
import { pageFixture } from "./pageFixture";

let page: Page;
let browser: Browser;


Before(async function () {
    browser = await chromium.launch({ headless: true });
    page = await browser.newPage();
    pageFixture.page = page;
});

After(async function () {
    await pageFixture.page.close();
    await browser.close();
});
