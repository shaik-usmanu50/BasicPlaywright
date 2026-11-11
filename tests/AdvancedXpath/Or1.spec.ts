




import {test,expect}from '@playwright/test'

test("test case on starts with xpath", async({page})=>
{
    await page.goto("http://localhost/orangehrm-2.5.0.2/login.php")
    await page.waitForTimeout(500);
    await page.locator("//input[@class= 'hello' or @name = 'txtUserName']").fill("selenium");
    await page.waitForTimeout(500);
    await page.locator("//input[@class= 'sound' or @name = 'txtPassword']").fill("selenium");
    await page.waitForTimeout(500);
    await page.locator("//input[contains(@type, 'bmi')]").click();
    await page.waitForTimeout(500);

  
    await page.waitForTimeout(5000);
})
