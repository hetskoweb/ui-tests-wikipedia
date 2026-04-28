const { test, expect } = require('@playwright/test');
const { WikipediaPage } = require('../pages/WikipediaPage');

test.describe('Wikipedia Search Tests', () => {

  test('Відкриття головної сторінки', async ({ page }) => {
    const wiki = new WikipediaPage(page);

    await wiki.open();

    await expect(page).toHaveTitle(/Wikipedia/);
    await expect(await wiki.isLogoVisible()).toBeTruthy();
  });

  test('Пошук Playwright', async ({ page }) => {
    const wiki = new WikipediaPage(page);

    await wiki.open();
    await wiki.search('Playwright');

    const title = await wiki.getTitle();
    expect(title).toContain('Playwright');
  });

  test('Пошук JavaScript', async ({ page }) => {
    const wiki = new WikipediaPage(page);

    await wiki.open();
    await wiki.search('JavaScript');

    const title = await wiki.getTitle();
    expect(title).toContain('JavaScript');
  });

});