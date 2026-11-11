
import {test, expect} from '@playwright/test'

test("TEST CASE ON GETBY TEST ID", async({page})=>
{
    await page.goto("file:///C:/Users/shaik/Downloads/drive-download-20261028T092324Z-1-001/ByTestID.html")
    await page.waitForTimeout(1000);
    await page.getByTestId("login-button").click();
    await page.waitForTimeout(2000)
    await page.goBack();
    await page.waitForTimeout(1000);
    await page.getByTestId("username-input").fill("MAUSAMI")
    await page.waitForTimeout(2000);
    let H : any = await page.getByTestId("profile-card").textContent();
    console.log(H);

    await page.waitForTimeout(4000)

})