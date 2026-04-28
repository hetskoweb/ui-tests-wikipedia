class WikipediaPage {
  constructor(page) {
    this.page = page;

    this.searchInput = page.locator('input[name="search"]');
    this.firstHeading = page.locator('#firstHeading');
    this.logo = page.locator('.central-featured-logo');
  }

  async open() {
    await this.page.goto('https://www.wikipedia.org/');
  }

  async search(text) {
    await this.searchInput.fill(text);
    await this.searchInput.press('Enter');
  }

  async getTitle() {
    return await this.firstHeading.textContent();
  }

  async isLogoVisible() {
    return await this.logo.isVisible();
  }

  async isOnSearchPage() {
    return this.page.url().includes('Special:Search');
  }
}

module.exports = { WikipediaPage };