

import {test,expect} from '@playwright/test' 
import myexcel from 'xlsx'
test("test case on reading excel data ", async({page})=>
{
    const wb = myexcel.readFile('MyEmpinfo/Companyinfo.xlsx');
    const ws : any = wb.Sheets['Running'];
    const edata : any = myexcel.utils.sheet_to_json(ws, {header : 1});
    console.log("THHE NUMBER OF ROWS : " +edata.length)

    for(let M : number = 1; M< edata.length; M++)
    {
        console.log(edata[1] [0])
    }


  
})