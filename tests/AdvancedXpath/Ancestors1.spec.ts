




import{test, expect}from '@playwright/test'


test("TEST CASE ON FOLLOWING XPATH", async({page})=>
{
    await page.goto("http://localhost/orangehrm-2.5.0.2/login.php");
    await page.waitForTimeout(500);
    await page.locator("//input[@type = 'password']//preceding:: input[1]").fill("selenium");
    await page.waitForTimeout(500);
    await page.locator("//input[@type = 'text']//following::input[1]").fill("selenium");
    await page.waitForTimeout(500);
    await page.locator("//input[@type = 'text']// following:: input[2]").click();
    await page.waitForTimeout(500);

    await page.waitForTimeout(5000);

})
