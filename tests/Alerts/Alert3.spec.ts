

import {test,expect} from '@playwright/test'

test("test case on alerts", async({page})=>
{
    await page.goto("file:///C:/Users/shaik/Downloads/Selenium%20Elements-20261103T065352Z-1-001/Selenium%20Elements/Alert%20Message.html")
    await page.waitForTimeout(2000);
    page.on("dialog", async(M)=>
    {
        await page.waitForTimeout(2000);
        console.log("with ok only --> " +M.type) //alert
        M.accept()// click on ok   (press ctrl+space) 
    })
    await page.waitForTimeout(2000);
    await  page.locator("//button").click();

    await page.waitForTimeout(3000);
    
    
})