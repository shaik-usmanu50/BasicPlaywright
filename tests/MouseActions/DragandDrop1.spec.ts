import{test, expect} from '@playwright/test'

test("test case on mouse double click", async({page})=>
{
    await page.goto("file:///C:/Users/shaik/Downloads/Selenium%20Elements-20261103T065352Z-1-001/Selenium%20Elements/Drag%20and%20Drop.html")
    await page.waitForTimeout(3000);
    await page.dragAndDrop("img#drag1", "div#draghere")
    await page.waitForTimeout(3000);
})