

import {test, expect} from '@playwright/test'

test("test case on file upload", async({page})=>
{
    await page.goto("http://localhost/orangehrm-2.5.0.2/login.php");
    await page.locator("//input[@type = 'text']").fill("selenium");
    await page.locator("//input[@type = 'password']").fill("selenium");
    await page.locator("//input[@type = 'Submit']").click();
    await page.waitForTimeout(2000);
    await page.locator("li#pim").hover();
     await page.waitForTimeout(2000);
     await page.locator("//span[text()= 'Add Employee']").click();
     await page.waitForTimeout(2000);
    // await page.frameLocator("iframe#rightMenu").locator("input#txtEmployeeId").fill("1525");
    await page.frameLocator("iframe#rightMenu").locator("input#txtEmployeeId").clear();
    await page.frameLocator("iframe#rightMenu").locator("input#txtEmployeeId").type("1525");
})