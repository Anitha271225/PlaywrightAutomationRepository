
/* demo pgm on asseration , only skip failed test, string operation */

const{test,expect}=require("@playwright/test")

test('First Asseration Test',async({page})=>
{
    expect(125).toBe(125)
})

test.skip('Second Asseration failed Test',async({page})=>  /* Skip the test */
{
    expect(10.75).toBe(10.57)
})

test('Second Asseration Passed Test',async({page})=>{
    expect(10.57).toBe(10.57)
})

test('Third Asseartion Test',async({page})=>{
    expect(250).toBeGreaterThan(150)
})

test('Fourth Asserationtest- string operation',async({page})=>{
    expect('S G software testing').toContain('software1')
})

test('fivth failed Asseration string operation',async({page})=>{
expect('S G software testing'.includes('software1')).toBeTruthy
})

test('fiveth Asseration- string operation',async({page})=>{  /* only test to execute */
    expect('S G software testing'.includes('software')).toBeTruthy
})