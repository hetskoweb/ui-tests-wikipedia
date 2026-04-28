const { test, expect } = require('@playwright/test');
const { WikipediaPage } = require('../pages/WikipediaPage');

test.describe('Wikipedia Navigation Tests', () => {

  test('Перехід на сторінку статті', async ({ page }) => {
    const wiki = new WikipediaPage(page);

    await wiki.open();
    await wiki.search('Node.js');

    await expect(page).toHaveURL(/Node.js/);
  });

  test('Перехід по внутрішньому посиланню', async ({ page }) => {
    await page.goto('https://en.wikipedia.org/wiki/JavaScript');

    const link = page.locator('a', { hasText: 'programming language' }).first();
    await link.click();

    await expect(page).not.toHaveURL(/JavaScript/);
  });

});