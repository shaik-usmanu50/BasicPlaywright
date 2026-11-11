



import{test, expect} from '@playwright/test'

test("test case on mouse double click", async({page})=>
{
    await page.goto("https://jqueryui.com/resources/demos/droppable/default.html")

    await page.waitForTimeout(3000);
    await page.dragAndDrop("div#draggable", "div#droppable")
    await page.waitForTimeout(3000);
})