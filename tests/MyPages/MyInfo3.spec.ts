

import {test, expect} from '@playwright/test'

test("OPEN MY BROWSER", async({page})=> // here page is predefined keyword
{
    
    await page.goto("https://www.facebook.com/")

    await page.waitForTimeout(4000)
})