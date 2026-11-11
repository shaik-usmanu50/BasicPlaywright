

import {test, expect} from '@playwright/test'

test("TEST CASE ON GET BY TEXT", async({page})=>
{
    await page.goto("file:///C:/Users/shaik/Downloads/drive-download-20261028T092324Z-1-001/ByTextFile.html")
    await page.waitForTimeout(1000);
    await page.getByText("MyGoogle").click();
    await page.waitForTimeout(2000);
    await page.goBack();
    await page.waitForTimeout(1000);
    await page.getByText("Go to TheMask").click();
    await page.waitForTimeout(1000);

    await page.waitForTimeout(4000)
})