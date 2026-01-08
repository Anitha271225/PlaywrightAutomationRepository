const {test, expect} = require('@playwright/test')

test.beforeAll(async()=>{
    console.log("Login into the Application!!!");
})
 
test.afterAll(async ()=>{
    console.log("Logout from the Application!!!");
   
})
test.describe('Sanity Testcases',()=>{
 
    test('First Test', async ({page})=>{
        console.log("It is a First Test case!!!")
    })
 
    test('Second Test', async ({page})=>{
        console.log("It is a Second Test case!!!")
    })
})
 
test.describe('Regression Testcases',()=>{
    test('Third Test', async ({page})=>{
        console.log("It is a Third Test case!!!")
    })
 
    test('Fourth Test', async ({page})=>{
        console.log("It is a Fourth Test case!!!")
    })
})

test.describe('Unity Testcase',()=>{
    test('Fivth Test', async ({page})=>{
        console.log("It is a fivth Test case!!!")
    })
 
    test('sixth Test', async ({page})=>{
        console.log("It is a sixth Test case!!!")
    })
})