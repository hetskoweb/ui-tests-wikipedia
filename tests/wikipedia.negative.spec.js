const { test, expect } = require('@playwright/test');
const { WikipediaPage } = require('../pages/WikipediaPage');

test.describe('Wikipedia Negative Tests', () => {

  test('Пошук неіснуючої сторінки', async ({ page }) => {
    const wiki = new WikipediaPage(page);

    await wiki.open();
    await wiki.search('asdhaskdhaskdh123123');

    await expect(page).toHaveURL(/Special:Search/);

    await expect(page.locator('#mw-content-text')).toBeVisible();
  });

  test('Порожній пошук', async ({ page }) => {
    const wiki = new WikipediaPage(page);

    await wiki.open();
    await wiki.search('');

    await expect(page).toHaveURL(/wikipedia\.org|Special:Search/);

    await expect(page.locator('body')).toBeVisible();
  });

});