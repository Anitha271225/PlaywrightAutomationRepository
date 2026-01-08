const {test,expect}=require('@playwright/test')


test.beforeAll(async()=>{
    console.log("Login into the application");
})

test.afterAll(async()=>{
    console.log("logout from the application");
})


test("firt test",async({page})=>{
    console.log("It is first testcase");
})

test("second test",async({page})=>{
    console.log("It is second testcase");
})

test("third test",async({page})=>{
    console.log("It is third testcase");
})

test("fourth test",async({page})=>{
    console.log("It is fourth testcase");
})