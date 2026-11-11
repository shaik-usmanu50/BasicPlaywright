

import {test, expect} from '@playwright/test'

test("test case on check box", async({page})=>
{
    await page.goto("file:///C:/Users/shaik/Downloads/Selenium%20Elements-20261103T065352Z-1-001/Selenium%20Elements/Country%20Check%20box.html")
    await page.waitForTimeout(2000);
    await page.locator("xpath = /html/body/form/input[1]").check();
    await page.waitForTimeout(5000)
})