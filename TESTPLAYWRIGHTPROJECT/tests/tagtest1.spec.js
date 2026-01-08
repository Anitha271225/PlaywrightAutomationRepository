const {test, expect} = require('@playwright/test')

test("First Test @sanity",async({page})=>{
    console.log("Sanity First Test Execution");
})

test("Second Test @sanity",async({page})=>{
    console.log("Sanity Second Test Execution");
})

test("third Test @Regression",async({page})=>{
    console.log("Regression third Test Execution");
})

test("fourth Test @Regression",async({page})=>{
    console.log("Regression fourth Test Execution");
})

test("fifth Test @sanity@Regression",async({page})=>{
    console.log(" fifth Test Execution");
})

test("six Test @sanity@Regression",async({page})=>{
    console.log(" Sixth Test Execution");
})
