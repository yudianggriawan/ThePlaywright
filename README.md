E2E Test Automation – E-Commerce Checkout Flow
Test Overview

Automated end-to-end testing for an e-commerce checkout flow using Playwright.
This test suite covers 6 comprehensive test scenarios to validate core user journeys and edge cases.

Test Cases Coverage
TC001 – Complete Checkout Process

Objective: Validate the full checkout flow from login to order confirmation
Steps:

Login using valid credentials

Add 2 products to the cart

Proceed to checkout

Fill in customer information

Complete the order

Verify order confirmation

Expected Result:
Order is successfully created with confirmation message “Thank you for your order!”

TC002 – Empty Form Validation

Objective: Validate error handling for empty checkout form submission
Steps:

Login and add a product

Navigate to checkout

Submit the form without filling in customer information

Expected Result:
Error message “First Name is required” is displayed

TC003 – Cart Management

Objective: Validate remove item functionality from the cart
Steps:

Add 3 products to the cart

Remove 1 product

Verify cart item count

Expected Result:
Cart badge updates from 3 to 2

TC004 – Product Sorting

Objective: Validate product sorting functionality
Steps:

Sort products by price (low to high)

Verify prices are displayed in ascending order

Expected Result:
Products are sorted correctly

TC005 – Continue Shopping Navigation

Objective: Validate navigation flow from cart to product listing
Steps:

Add a product and navigate to the cart

Click “Continue Shopping”

Expected Result:
User is redirected back to the products page and the cart retains selected items

TC006 – Logout Functionality

Objective: Validate logout process
Steps:

Login

Open menu and perform logout

Expected Result:
User is redirected to the login page

Tech Stack

Framework: Playwright

Language: JavaScript

Test Pattern: Page Object Model (concepts)

Assertions: Playwright expect library

Setup & Installation
# Install dependencies
npm init playwright@latest

# Run all tests
npx playwright test

# Run specific test file
npx playwright test checkout.spec.js

# Run with UI mode
npx playwright test --ui

# Run with headed browser
npx playwright test --headed

# Generate HTML report
npx playwright show-report

Test Execution
Run all tests
npx playwright test checkout.spec.js

Run a single test case
npx playwright test checkout.spec.js -g "TC001"

Run with a specific browser
npx playwright test checkout.spec.js --project=chromium
npx playwright test checkout.spec.js --project=firefox
npx playwright test checkout.spec.js --project=webkit

Test Results
Running 6 tests using 1 worker

✓ TC001 - Complete checkout process with valid credentials (5.2s)
✓ TC002 - Validation: Empty checkout information (2.1s)
✓ TC003 - Remove item from cart (2.8s)
✓ TC004 - Product sorting functionality (1.9s)
✓ TC005 - Navigation: Continue shopping from cart (2.3s)
✓ TC006 - Logout functionality (2.0s)

6 passed (16.3s)

Key Features

✅ Comprehensive Coverage – Covers happy paths, negative scenarios, and edge cases
✅ Maintainable – Clean code structure with clear test steps
✅ Reusable – Efficient setup using beforeEach hooks
✅ Reliable – Uses proper waits and assertions
✅ Descriptive – Self-documenting and readable test names

📈 Best Practices Applied

✨ Descriptive test names with TC numbering

🎯 Single responsibility per test case

🔄 Setup and teardown using hooks

📝 Clear comments for each test step

🎨 Consistent locator strategy

✔️ Multiple assertion points for thorough validation

🚀 Future Improvements

 Implement full Page Object Model (POM) pattern

 Add API testing for test data setup

 Integrate with CI/CD pipeline

 Add visual regression testing

 Implement test data management

 Add performance testing metrics

📝 Notes

This test suite is created to demonstrate automation testing capabilities using the public demo site
SauceDemo → https://www.saucedemo.com

Author: Yudi Anggriawan
Role: QA Engineer | Test Automation
Tools: Playwright, JavaScript, GitHub Actions

#QA #TestAutomation #Playwright #JavaScript #E2ETesting
