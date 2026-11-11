

import{test, expect} from '@playwright/test'

test("TEST CASE ON GET BY PLACEHOLDER", async({page})=>
{
    await page.goto("file:///C:/Users/shaik/Downloads/drive-download-20261028T092324Z-1-001/PlaceHolderPro.html")
    await page.waitForTimeout(1000);
    await page.getByPlaceholder("Username").fill("MAUSAMI")
    await page.getByPlaceholder("Password").fill("USMAN")
    await page.getByPlaceholder("Email address").fill("MONDAY")
    await page.getByPlaceholder("Enter your comments").fill("I WILL LOVE HER FOR MY ENTIRE LIFE")

    await page.waitForTimeout(4000)
    
})