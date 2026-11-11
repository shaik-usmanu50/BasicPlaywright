

import {test,expect} from '@playwright/test'

test("test case on alerts", async({page})=>
{
    await page.goto("file:///C:/Users/shaik/Downloads/Selenium%20Elements-20261103T065352Z-1-001/Selenium%20Elements/Model%20Popup.html")
    await page.waitForTimeout(2000);
    await page.locator("button#Modal").click();

    await page.waitForTimeout(2000);
    await  page.locator("span.close").click();

    await page.waitForTimeout(3000);
    
    
})