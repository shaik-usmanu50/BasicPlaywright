

import{test, expect} from '@playwright/test'

test("test case on mouse double click", async({page})=>
{
    await page.goto("file:///C:/Users/shaik/AppData/Local/Temp/3e24f3c2-8315-4eec-951b-c66d9f2f0baa_Selenium%20Elements-20261103T065352Z-1-001.zip.baa/Selenium%20Elements/Doubleclick.html")

    await page.waitForTimeout(3000);
    await page.locator("p#demo").dblclick();
    await page.waitForTimeout(3000);
})