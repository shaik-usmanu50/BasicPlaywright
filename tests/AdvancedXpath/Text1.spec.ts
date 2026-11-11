
import {test,expect}from '@playwright/test'

test("test case on starts with xpath", async({page})=>
{
    await page.goto("http://localhost/orangehrm-2.5.0.2/login.php")
    await page.waitForTimeout(500);
    await page.locator("//input[contains(@type, 'ex' )]").fill("selenium");
    await page.waitForTimeout(500);
    await page.locator("//input[contains(@type, 'ssw')]").fill("selenium");
    await page.waitForTimeout(500);
    await page.locator("//input[contains(@type, 'bmi')]").click();
    await page.waitForTimeout(500);
     //let myloc = page.locator("//li[text()='welcome selenium']")
     //let mytext : any = await myloc.textcontent();
     //console.log(mytext)

     console.log(await page.locator("//li[text()='Welcome Selenium']").textContent())


    await page.waitForTimeout(5000);
})
