

import {test, expect} from '@playwright/test'

test("OPEN MY BROWSER", async({page})=> // here page is predefined keyword
{
    
    await page.goto("https://www.facebook.com/")

    await page.pause();  // with the pause,, page will be paused until we press

})