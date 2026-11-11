

import {test,expect}from '@playwright/test'

test("test case on keyboard actions", async({page})=>
{
    await page.goto("https://www.google.com/");
    await page.waitForTimeout(2000);
    await page.locator("textarea#ti6dpd").fill("MY GF BDAY IS COMING SOON IN DECEMBER");
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+X');
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+V');
    await page.waitForTimeout(500);
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(500);
    await page.keyboard.press('Delete');
    await page.waitForTimeout(5000);


    
})