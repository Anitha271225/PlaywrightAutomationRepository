const {test, expect} = require('@playwright/test')

let page;
let contex
 
/**test("Login Logout application Test", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.waitForTimeout(4000)

***/

    test.beforeAll(async({browser})=>{
         contex= await browser.newContext()
         page=await contex.newPage()
         await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
         console.log("hookbefore all")
         await page.waitForTimeout(3000)
    })

    test.afterAll(async()=>{
        console.log("Hook afterAll")
        await page.close()
        await contex.close()
    })
 
    //Perform Login Action
    test("Login into the Applicaton",async({})=>
   {
    await page.locator("input[placeholder='Username']").fill("Admin")
    await page.locator('input[type="password"]').fill("admin123")
    await page.locator("button:has-text('Login')").click()
    await page.waitForTimeout(4000)
    console.log("login application ---1")
     

    //Assert the steps
    await expect(page).toHaveTitle("OrangeHRM")
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    await page.waitForTimeout(3000)
    

    })


    test("Log out from the Application",async()=>{

    // Perform Logout Action
    await page.locator('img.oxd-userdropdown-img').click()
    await page.locator(':text("Logout")').click()
    await page.waitForTimeout(4000)
    console.log("log out from application ---2")

    //Assert the steps
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page).toHaveTitle("OrangeHRM")
    await page.waitForTimeout(3000)

    })
