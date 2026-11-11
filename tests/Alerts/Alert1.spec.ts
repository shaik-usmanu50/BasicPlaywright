

import {test,expect} from '@playwright/test'

test("test case on alerts", async({page})=>
{
    await page.goto("file:///C:/Users/shaik/Downloads/Selenium%20Elements-20261103T065352Z-1-001/Selenium%20Elements/Alert%20Message.html")
    await page.waitForTimeout(2000);
    await page.locator("//button").click();
    await page.waitForTimeout(3000);
    
    
})