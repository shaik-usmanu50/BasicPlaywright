

import {test, expect} from '@playwright/test'

test("test case on get by label", async({page})=>
{
    await page.goto("file:///C:/Users/shaik/Downloads/drive-download-20261028T092324Z-1-001/ByLabel.html")
    await page.waitForTimeout(1000);
    await page.getByLabel("Username").fill("TODAY IAM FEELING SAD")
    await page.waitForTimeout(4000);
})