import { test, expect } from '@playwright/test';

test.describe('E-Commerce Checkout Flow', () => {
  test.beforeEach(async ({ page }) => {
    // Setup: Navigate to homepage
    await page.goto('https://www.saucedemo.com');
  });

  test('TC001 - Complete checkout process with valid credentials', async ({ page }) => {
    // Step 1: Login
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    
    // Verify: Successfully logged in
    await expect(page.locator('.title')).toHaveText('Products');
    
    // Step 2: Add products to cart
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('[data-test="add-to-cart-sauce-labs-bike-light"]');
    
    // Verify: Cart badge shows correct count
    await expect(page.locator('.shopping_cart_badge')).toHaveText('2');
    
    // Step 3: Go to cart
    await page.click('.shopping_cart_link');
    
    // Verify: Cart page displays added items
    await expect(page.locator('.cart_item')).toHaveCount(2);
    await expect(page.locator('.inventory_item_name').first()).toContainText('Sauce Labs Backpack');
    
    // Step 4: Proceed to checkout
    await page.click('#checkout');
    
    // Step 5: Fill checkout information
    await page.fill('#first-name', 'John');
    await page.fill('#last-name', 'Doe');
    await page.fill('#postal-code', '12345');
    await page.click('#continue');
    
    // Verify: Checkout overview page
    await expect(page.locator('.title')).toHaveText('Checkout: Overview');
    
    // Verify: Total price calculation
    const subtotal = await page.locator('.summary_subtotal_label').textContent();
    expect(subtotal).toContain('$');
    
    // Step 6: Complete order
    await page.click('#finish');
    
    // Verify: Order confirmation
    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
    await expect(page.locator('.complete-text')).toBeVisible();
  });

  test('TC002 - Validation: Empty checkout information', async ({ page }) => {
    // Login
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    
    // Add product and go to checkout
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('.shopping_cart_link');
    await page.click('#checkout');
    
    // Try to continue without filling information
    await page.click('#continue');
    
    // Verify: Error message appears
    await expect(page.locator('[data-test="error"]')).toBeVisible();
    await expect(page.locator('[data-test="error"]')).toContainText('First Name is required');
  });

  test('TC003 - Remove item from cart', async ({ page }) => {
    // Login
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    
    // Add multiple items
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('[data-test="add-to-cart-sauce-labs-bike-light"]');
    await page.click('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
    
    // Go to cart
    await page.click('.shopping_cart_link');
    
    // Verify: 3 items in cart
    await expect(page.locator('.cart_item')).toHaveCount(3);
    
    // Remove one item
    await page.click('[data-test="remove-sauce-labs-bike-light"]');
    
    // Verify: 2 items remain
    await expect(page.locator('.cart_item')).toHaveCount(2);
    await expect(page.locator('.shopping_cart_badge')).toHaveText('2');
  });

  test('TC004 - Product sorting functionality', async ({ page }) => {
    // Login
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    
    // Sort by price (low to high)
    await page.selectOption('.product_sort_container', 'lohi');
    
    // Get all prices
    const prices = await page.locator('.inventory_item_price').allTextContents();
    const numericPrices = prices.map(price => parseFloat(price.replace('$', '')));
    
    // Verify: Prices are in ascending order
    for (let i = 0; i < numericPrices.length - 1; i++) {
      expect(numericPrices[i]).toBeLessThanOrEqual(numericPrices[i + 1]);
    }
  });

  test('TC005 - Navigation: Continue shopping from cart', async ({ page }) => {
    // Login
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    
    // Add item and go to cart
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('.shopping_cart_link');
    
    // Click continue shopping
    await page.click('#continue-shopping');
    
    // Verify: Back to products page
    await expect(page.locator('.title')).toHaveText('Products');
    // Cart badge should still show 1 item
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  });

  test('TC006 - Logout functionality', async ({ page }) => {
    // Login
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    
    // Open menu
    await page.click('#react-burger-menu-btn');
    
    // Click logout
    await page.click('#logout_sidebar_link');
    
    // Verify: Redirected to login page
    await expect(page.locator('#login-button')).toBeVisible();
    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });
});
