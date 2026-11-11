



import{test, expect} from '@playwright/test'

test("test case on checking drop down", async({page})=>
{
    await page.goto("http://localhost/orangehrm-2.5.0.2/login.php")
    await page.locator("//input[@type = 'text']").fill("selenium")
    await page.locator("//input[@type = 'password']").fill("selenium")
    await page.locator("//input[@type = 'Submit']").click();
    await page.waitForTimeout(3000);
   
    const M : any = page.frameLocator("iframe#rightMenu");// storing frame as a variable

    const U : any = M.locator("select#loc_code")//storing dropdown as a variable

    const Ucount = await U.locator("option").count();
    console.log(Ucount);

    console.log("THE NUMBER ELEMENTS IN THE DROP DOWN ELEMENT ARE : +Ucount")
   
    

    await page.waitForTimeout(3000);
    
})
