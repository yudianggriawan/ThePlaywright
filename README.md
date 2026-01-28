# 🧪 E2E Test Automation - E-Commerce Checkout Flow

## 📋 Test Overview
Automated end-to-end testing untuk flow checkout e-commerce menggunakan Playwright. Test suite ini mencakup 6 skenario testing yang komprehensif.

## 🎯 Test Cases Coverage

### TC001 - Complete Checkout Process
**Objective:** Memvalidasi full checkout flow dari login hingga order confirmation  
**Steps:**
- Login dengan kredensial valid
- Add 2 produk ke cart
- Proceed to checkout
- Fill informasi customer
- Complete order
- Verify order confirmation

**Expected Result:** Order berhasil dibuat dengan konfirmasi "Thank you for your order!"

---

### TC002 - Empty Form Validation
**Objective:** Memvalidasi error handling untuk form kosong  
**Steps:**
- Login dan add product
- Navigate ke checkout
- Submit tanpa mengisi informasi

**Expected Result:** Error message "First Name is required" muncul

---

### TC003 - Cart Management
**Objective:** Memvalidasi fungsi remove item dari cart  
**Steps:**
- Add 3 produk ke cart
- Remove 1 produk
- Verify cart count

**Expected Result:** Cart badge update dari 3 menjadi 2

---

### TC004 - Product Sorting
**Objective:** Memvalidasi sorting functionality  
**Steps:**
- Sort produk by price (low to high)
- Verify urutan harga ascending

**Expected Result:** Produk tersortir dengan benar

---

### TC005 - Continue Shopping Navigation
**Objective:** Memvalidasi navigation flow  
**Steps:**
- Add product dan go to cart
- Click "Continue Shopping"

**Expected Result:** Kembali ke products page, cart tetap berisi item

---

### TC006 - Logout Functionality
**Objective:** Memvalidasi logout process  
**Steps:**
- Login
- Open menu dan logout

**Expected Result:** Redirect ke login page

---

## 🛠️ Tech Stack
- **Framework:** Playwright
- **Language:** JavaScript
- **Test Pattern:** Page Object Model concepts
- **Assertions:** Playwright expect library

## 📦 Setup & Installation

```bash
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
```

## 🎬 Test Execution

### Run all tests
```bash
npx playwright test checkout.spec.js
```

### Run single test
```bash
npx playwright test checkout.spec.js -g "TC001"
```

### Run with specific browser
```bash
npx playwright test checkout.spec.js --project=chromium
npx playwright test checkout.spec.js --project=firefox
npx playwright test checkout.spec.js --project=webkit
```

## 📊 Test Results

```
Running 6 tests using 1 worker

✓ TC001 - Complete checkout process with valid credentials (5.2s)
✓ TC002 - Validation: Empty checkout information (2.1s)
✓ TC003 - Remove item from cart (2.8s)
✓ TC004 - Product sorting functionality (1.9s)
✓ TC005 - Navigation: Continue shopping from cart (2.3s)
✓ TC006 - Logout functionality (2.0s)

6 passed (16.3s)
```

## 🔍 Key Features

✅ **Comprehensive Coverage** - Covers happy path, negative scenarios, dan edge cases  
✅ **Maintainable** - Clean code structure dengan clear test steps  
✅ **Reusable** - beforeEach hook untuk setup yang efficient  
✅ **Reliable** - Menggunakan proper waits dan assertions  
✅ **Descriptive** - Test names yang jelas dan self-documenting

## 📈 Best Practices Applied

- ✨ Descriptive test names dengan TC numbering
- 🎯 Single responsibility per test case
- 🔄 Setup dan teardown menggunakan hooks
- 📝 Clear comments untuk setiap test step
- 🎨 Consistent selector strategy
- ✔️ Multiple assertion points untuk thorough validation

## 🚀 Future Improvements

- [ ] Implement Page Object Model pattern
- [ ] Add API testing untuk data setup
- [ ] Integrate with CI/CD pipeline
- [ ] Add visual regression testing
- [ ] Implement test data management
- [ ] Add performance testing metrics

## 📝 Notes

Test suite ini dibuat untuk demo testing automation capabilities menggunakan public demo site [SauceDemo](https://www.saucedemo.com).

---

**Author:** [Your Name]  
**Role:** QA Engineer | Test Automation  
**Tools:** Playwright, JavaScript, GitHub Actions

#QA #TestAutomation #Playwright #JavaScript #E2ETesting
