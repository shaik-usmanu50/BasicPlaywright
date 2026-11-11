

import {test,expect} from '@playwright/test'

test("test case on windows handling", async({browser})=>
{   
    const bcxt = await browser.newContext();
    const ppage = await bcxt.newPage();


    await ppage .goto("http://localhost/orangehrm-2.5.0.2/login.php");
    await ppage .locator("//input[@type = 'text']").fill("selenium");
    await ppage .locator("//input[@type = 'password']").fill("selenium");
     await ppage .waitForTimeout(1000);
    await ppage .locator("//input[@type = 'Submit']").click();
    await ppage .waitForTimeout(2000);
    console.log("AFTER LOGIN : " +await ppage.title());
    await ppage .locator("li#help").hover();
    await ppage .waitForTimeout(2000);
    const[cpage] = await Promise.all//try to initialize the child window
    (
      [
        bcxt.waitForEvent("page"),
        await ppage.locator("//span[text()= 'Support']").click()



      ]

    )




    await cpage.waitForTimeout(2000);
    
   
    console.log("AFTER CICK ON SUPPORT, TITLE IS : " +await cpage.title());
     
    
})