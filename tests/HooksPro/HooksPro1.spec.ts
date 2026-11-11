

import {test, expect} from '@playwright/test'

test.beforeAll("HI IAM BEFORE ALL", async()=>
{
    console.log("NEED TO CONNECT TO INTERNET")
})

 test.afterAll("HI IAM AFTER ALL", async()=>
{
    console.log("SHUT DOWN MY LAPTOP")
})

 test.beforeEach("HI IAM BEFORE EACH", async()=>
{
    console.log("LAUNCH MY BROWSER")
})

test.afterEach("HI IAM AFTER EACH", async()=>
{
    console.log("CLOSE MY BROWSER")
})

test("Test case1 - check the functionality", async()=>
{
    console.log("LOGIN SHOOULD BE SUCCESSFULL")
})

test("TEST CASE2 - check the title after login", async()=>
{
    console.log("TITLE AFTER LOGIN IS MAUSAMI")
})