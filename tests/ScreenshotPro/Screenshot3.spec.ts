

import {test , expect} from '@playwright/test'

test("test case on handling screenshots", async({page})=>
{
    await page.goto("https://www.snapdeal.com/")
    await page.waitForTimeout(5000);
    await page.screenshot({path : 'MyEvidences/snapdealHome.jpg', fullPage : true})
      await page.waitForTimeout(5000);

})