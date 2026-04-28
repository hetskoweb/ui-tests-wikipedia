# Wikipedia Playwright Tests

This project contains automated UI tests for Wikipedia using Playwright and Page Object Model (POM).

## 📌 Project Purpose

The goal of this project is to demonstrate end-to-end testing of Wikipedia functionality, including positive and negative test scenarios.

---

## 🧪 Test Scenarios

### 🔍 Search Tests
- Verify that searching for a valid term (e.g. "Playwright", "JavaScript") opens the correct article page
- Validate that the page title matches the searched query
- Ensure Wikipedia logo is visible on the main page

---

### 🚫 Negative Tests
- Search for a non-existing term and verify that Wikipedia redirects to search results page
- Validate behavior of empty search input

---

### 🔗 Navigation Tests
- Verify navigation from one Wikipedia article to another via internal links
- Ensure URL changes after clicking internal links

---

## 🚀 Tech Stack

- Playwright
- JavaScript (Node.js)
- Page Object Model (POM)
