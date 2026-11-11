

import {test,expect} from '@playwright/test' 
import myexcel from 'xlsx'


function readingmyexcel(fpath : string, sname : string)
{
    const wb = myexcel.readFile(fpath);
    const ws : any = wb.Sheets[sname];
    const edata : any = myexcel.utils.sheet_to_json(ws, {header : 1});
    return edata;
}
test("test case on reading excel data ", async({page})=>
{
    const empdataexcel = readingmyexcel('MyEmpinfo/Companyinfo.xlsx', 'Running');
    const logindata = readingmyexcel('MyEmpinfo/Companyinfo.xlsx', 'Orangehrm')
    console.log("THE NUMBER OF ROWS : " +empdataexcel.length)

    for(let M : number = 1; M< empdataexcel.length; M++)
    {
        console.log(empdataexcel[M] [0])
    }
     console.log(logindata[1] [0] +"       " +logindata[1] [0])

  
})