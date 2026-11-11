

import {test, expect} from '@playwright/test'

test("test case on check box", async({page})=>
{
    await page.goto("file:///C:/Users/shaik/Downloads/Selenium%20Elements-20261103T065352Z-1-001/Selenium%20Elements/Country%20Check%20box.html")
    await page.waitForTimeout(2000);
    const checkboxes = page.locator("input[type = 'checkbox']");
    const count = await checkboxes.count();

    for(let i = 0; i < count; i++)
    {
        await checkboxes.nth(i).check();
    }
    await page.waitForTimeout(5000)
})