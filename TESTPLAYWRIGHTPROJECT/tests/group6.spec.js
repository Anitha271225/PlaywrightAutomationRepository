const {test, expect} = require('@playwright/test')

/** groups with Hooks beforeEach afterEach  **/

test.beforeEach(async({})=>{
    console.log("login to the Application")
})

test.afterEach(async({})=>{
    console.log("logout from the Application")
})

test.describe.serial("sanity testcase Group",() =>{
    test("first tc",async({page})=>{
        console.log("It is firt testcase")
    })
    test("second testcase",async({page})=>{
        console.log("It is second testcase")
    })
     test("Third testcase",async({page})=>{
        console.log("Its third testcase")
    })
    test("forth Testcase",async({page})=>{
        console.log("it is a fourth testcase")
    })
    test("fivth testcase",async({page})=>{
        console.log("It is fivth testcase")
    })
    test("sixth testcaes",async({page})=>{
        console.log("it is a sixth testcase")
    })
})




