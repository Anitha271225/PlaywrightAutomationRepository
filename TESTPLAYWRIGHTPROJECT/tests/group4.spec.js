const {test, expect} = require('@playwright/test')

/** execute in serial order .serial  **/

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




