

import {test , expect} from '@playwright/test'

test("test case on handling screenshots", async({page})=>
{
    await page.goto("http://localhost/orangehrm-2.5.0.2/login.php")
    await page.waitForTimeout(500);
    await page.screenshot({path : 'MyEvidences/Homepage.jpg'})
    await page.locator("//input[@type = 'text']").fill("selenium")
    await page.locator("//input[@type = 'password']").fill("selenium")
    await page.locator("//table[@cellpadding = '3']").screenshot({path : 'MyEvidences/TableUsernamepassword.jpg'});
    await page.screenshot({path : 'MyEvidences/Usernamepassword.jpg'});
     await page.locator("//input[@type = 'Submit']").click();

    await page.waitForTimeout(3000);

    await page.screenshot({path : 'MyEvidences/AfterLogin' +new Date().getMilliseconds() +'jpg'});
      await page.waitForTimeout(3000); 
      
      console.log("MY CURRENT MILLI SECONDS IS : " +(new Date().getMilliseconds()));
     

})