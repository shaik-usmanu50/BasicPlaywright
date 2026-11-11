

import{test, expect} from '@playwright/test'

test("TEST CASE ON GET BY ROLE", async({page})=>
{
    await page.goto("http://localhost/orangehrm-2.5.0.2/login.php")
    await page.waitForTimeout(1000);
    await page.locator("// input [@type = 'text']").fill("DYNAMO");
    await page.waitForTimeout(2000)
    await page.locator("//input[@type = 'password']").fill("DYNAMO");
    await page.waitForTimeout(2000)
    await page.getByRole("button", {name : "Login"}).click();
    await page.waitForTimeout(4000)
})