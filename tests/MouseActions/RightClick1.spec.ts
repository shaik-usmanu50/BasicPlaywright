

import {test, expect} from '@playwright/test'

test("test case on Mouse Right Click", async({page})=>
{
    await page.goto("http://localhost/orangehrm-2.5.0.2/login.php")

    await page.waitForTimeout(2000);
    await page.locator("//a[text()='OrangeHRM']").click({button : "right"})
    await page.waitForTimeout(2000);
})