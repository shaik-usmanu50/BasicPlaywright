

import {test, expect} from '@playwright/test'
import jsondata from 'fs'
test("test case on reading jsondata ", async({page})=>
{
 const jsonemp = JSON.parse(jsondata.readFileSync('Empdata/Empdetails.json', 'utf-8'))
 
 await page.goto("http://localhost/orangehrm-2.5.0.2/login.php")
 await page.locator(jsonemp.XUN).fill(jsonemp.UN)
 await page.locator(jsonemp.XPWD).fill(jsonemp.PWD)
 await page.locator(jsonemp.XSUB).click();

 await page.waitForTimeout(5000)




   //console.log(jsonemp.R)
})