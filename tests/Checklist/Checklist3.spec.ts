


import {test,expect}from '@playwright/test'

test("test case on keyboard actions", async({page})=>
{
  await page.goto("file:///C:/Users/shaik/Downloads/Selenium%20Elements-20261103T065352Z-1-001/Selenium%20Elements/Country%20Name.Htm");
  await page.waitForTimeout(2000);
  const CL = page.locator("option");
   await page.waitForTimeout(1000);
   await page.keyboard.down('Control')//down means, Holding the control button
  await CL.nth(2).click();
  await page.waitForTimeout(1000);
  await CL.nth(6).click();
  await page.waitForTimeout(1000);
  await CL.nth(15).click();
  await page.waitForTimeout(1000);
  await CL.nth(25).click();
  await page.waitForTimeout(1000);
  await CL.nth(35).click();
  await page.waitForTimeout(1000);



})
