

import{test, expect} from '@playwright/test'

test("test case on checking drop down", async({page})=>
{
    await page.goto("http://localhost/orangehrm-2.5.0.2/login.php")
    await page.locator("//input[@type = 'text']").fill("selenium")
    await page.locator("//input[@type = 'password']").fill("selenium")
    await page.locator("//input[@type = 'Submit']").click();
    await page.waitForTimeout(3000);
    const M : any = page.frameLocator("iframe#rightMenu");
    const U : any = M.locator("select#loc_code");
    const Ucount = await U.locator("//option").count();
    const Uvalues = await U.locator("//option").allTextContents();
    console.log("THE NUMBER OF ELEMENTS IN THE DROPDOWN ARE :" +Ucount);
    console.log("THE ELEMENTS IN THE DROP DOWN ARE : " +Uvalues);
    
      await page.waitForTimeout(3000);  

})
