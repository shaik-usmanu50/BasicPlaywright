

import {test,expect} from '@playwright/test'

test("test case on windows handling", async({page})=>
{
    await page.goto("http://localhost/orangehrm-2.5.0.2/login.php");
    await page.locator("//input[@type = 'text']").fill("selenium");
    await page.locator("//input[@type = 'password']").fill("selenium");
     await page.waitForTimeout(1000);
    await page.locator("//input[@type = 'Submit']").("selenium");
    await page.waitForTimeout(2000);
    console.log("AFTER LOGIN : " +await page.title());
    await page.locator("li#help").hover();
    await page.waitForTimeout(2000);
    await page.locator("//span[text() = 'Support']").click();
    await page.waitForTimeout(2000);
    console.log("AFTER CICK ON SUPPORT, TITLE IS : " +await page.title());
     await page.waitForTimeout(2000);
     
    
})