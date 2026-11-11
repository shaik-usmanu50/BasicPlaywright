

import{test,expect} from '@playwright/test'

test("test case on absolute xpath", async({page})=>
{http://localhost/orangehrm-2.5.0.2/login.php
    await page.goto("http://localhost/orangehrm-2.5.0.2/login.phps")
    await page.waitForTimeout(500);
    await page.locator("xpath=/html/body/form/table/tbody/tr/td[2]/table/tbody/tr/td[2]/table/tbody/tr[2]/td[2]/input").fill("selenium");
    await page.waitForTimeout(500);
    await page.locator("xpath=/html/body/form/table/tbody/tr/td[2]/table/tbody/tr/td[2]/table/tbody/tr[3]/td[2]/input").fill("selenium");
    await page.waitForTimeout(500);
    await page.locator("xpath=/html/body/form/table/tbody/tr/td[2]/table/tbody/tr/td[2]/table/tbody/tr[4]/td[1]/input").click();
    await page.waitForTimeout(500);

    await page.waitForTimeout(5000);

})