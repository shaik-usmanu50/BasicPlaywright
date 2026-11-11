


import{test, expect} from '@playwright/test'

test("test case on mouse hover", async({page})=>
{
    await page.goto("http://localhost/orangehrm-2.5.0.2/login.php")
    await page.locator("//input[@type = 'text']").fill("selenium")
    await page.locator("//input[@type = 'password']").fill("selenium")
    await page.locator("//input[@type = 'Submit']").click();
    await page.waitForTimeout(3000);
    await page.locator("li#report").hover();
    await page.waitForTimeout(3000);
})