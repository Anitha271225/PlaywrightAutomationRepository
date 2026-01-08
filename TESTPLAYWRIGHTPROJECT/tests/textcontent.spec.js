const {test,expect}= require("@playwright/test")

test("capture Text content from Application",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.waitForTimeout(3000)

    //capture Text Content
    const username= await page.locator("(//p[normalize-space()='Username : Admin'])[1]").textContent()
    console.log("UserName Details:"+username)
    const Password= await page.locator("(//p[normalize-space()='Password : admin123'])[1]").textContent()
    console.log("Password Details:"+Password)

    //Invaid credentials
    await page.locator("//input[@placeholder='Username']").fill("Admin")
    await page.locator("//input[@placeholder='Password']").fill("admin")
    await page.locator("//button[normalize-space()='Login']").click()
    await page.waitForTimeout(4000)



     //Capture the error message and validate
     const errormessage=page.locator('p.oxd-text.oxd-text--p.oxd-alert-content-text').textContent()
     console.log("The error message:"+errormessage)

    expect(errormessage==='Invalid credentials')
   // expect(errormessage).toContain('credentials')
  //  expect(errormessage.includes('Invalid')).toBeTruthy()
    await page.waitForTimeout(3000)






})