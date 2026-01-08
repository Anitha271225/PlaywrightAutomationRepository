const {test, expect} = require('@playwright/test')

/** .only to execute one specfic tc  **/
/** .skip to skip one or multiple tc**/



test.describe("sanity testcase Group",() =>{
    test("first tc",async({page})=>{
        console.log("It is firt testcase")
    })
    test("second testcase",async({page})=>{
        console.log("It is second testcase")
    })
})

test.describe.skip("Regression Testcase Group",()=>{ //test.describe.only
    test("Third testcase",async({page})=>{
        console.log("Its third testcase")
    })
    test("forth Testcase",async({page})=>{
        console.log("it is a fourth testcase")
    })
}) 

test.describe("Unity testcase Group",()=>{
    test("fivth testcase",async({page})=>{
        console.log("It is fivth testcase")
    })
    test("sixth testcaes",async({page})=>{
        console.log("it is a sixth testcase")
    })
})

