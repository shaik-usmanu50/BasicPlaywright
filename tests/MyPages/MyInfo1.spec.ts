

import {test, expect, chromium} from '@playwright/test'

test("OPEN MY BROWSER", async()=>
{
    const BE = await chromium.launch();
    const BC = await BE.newContext();
    const myuserpage = await BC.newPage();
    await myuserpage.goto("https://www.facebook.com/")
})