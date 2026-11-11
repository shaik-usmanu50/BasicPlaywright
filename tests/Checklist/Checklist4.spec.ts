


import {test,expect}from '@playwright/test'

test("test case on keyboard actions", async({page})=>
{
  await page.goto("file:///C:/Users/shaik/Downloads/Selenium%20Elements-20261103T065352Z-1-001/Selenium%20Elements/Country%20Name.Htm");
  await page.waitForTimeout(2000);
  await page.locator('select').click();
  await page.keyboard.press('Control+A');  // to select all countryss
   await page.waitForTimeout(2000);



})
