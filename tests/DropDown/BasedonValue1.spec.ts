





import{test, expect} from '@playwright/test'

test("test case on selecting element using index", async({page})=>
{
    await page.goto("http://localhost/orangehrm-2.5.0.2/login.php")
    await page.locator("//input[@type = 'text']").fill("selenium")
    await page.locator("//input[@type = 'password']").fill("selenium")
    await page.locator("//input[@type = 'Submit']").click();
    await page.waitForTimeout(3000);
    const F : any = page.frameLocator("iframe#rightMenu");
    const DD : any = F.locator("select#loc_code");
    await DD.selectOption("9")
    
      await page.waitForTimeout(5000);  

})
