

import {test, expect} from '@playwright/test'

test("Test case1",{tag : '@Reg'}, async()=>
{
    console.log("HI IAM TEST CASE1 - REGRESSION")
})
test("Test case2",{tag : '@SYST'}, async()=>
{
    console.log("HI IAM TEST CASE2 - SYSTEM")
})

test("Test case3", {tag : '@Reg'}, async()=>
{
    console.log("HI IAM TEST CASE3 - REGRESSION")
})

test("Test case4",{tag : '@SYST'}, async()=>
{
    console.log("HI IAM TEST CASE4 - SYSTEM")
})

test("Test case5", {tag : '@SYST'}, async()=>
{
    console.log("HI IAM TEST CASE5 - SYSTEM")
})
test("Test case6", {tag : '@Reg'}, async()=>
{
    console.log("HI IAM TEST CASE6 - REGRESSION")
})
test("Test case7",{tag : '@SYST'}, async()=>
{
    console.log("HI IAM TEST CASE7 - SYSTEM")
})

test("Test case8",{tag : '@SMK'}, async()=>
{
    console.log("HI IAM TEST CASE8 - SMOKE")
})

test("Test case9", {tag : '@SMK'}, async()=>
{
    console.log("HI IAM TEST CASE9 -SMOKE")
}) 

test("Test case10",{tag : '@Reg'}, async()=>
{
    console.log("HI IAM TEST CASE10 - REGRESSION")
}) 

test("Test case11",{tag : '@unit'}, async()=>
{
    console.log("HI IAM TEST CASE11 - UNIT")
})
test("Test case12",{tag : '@unit'},  async()=>
{
    console.log("HI IAM TEST CASE12 - UNIT")
})
test("Test case13",{tag : '@unit'}, async()=>
{
    console.log("HI IAM TEST CASE13 - UNIT")
})
test("Test case14",{tag : '@Reg'}, async()=>
{
    console.log("HI IAM TEST CASE14 - REGRESSION")
})
