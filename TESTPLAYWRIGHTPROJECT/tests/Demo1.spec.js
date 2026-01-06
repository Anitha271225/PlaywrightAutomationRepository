

/* Demo pgm on playwright 3 functions  */

const{test,expect}=require('@playwright/test')

test('First playwright Test',async function display({page}) {

    console.log("Running first pgm using traditional function");
    
})

test('Second playwright Test',async function ({page}) 

{
   console.log("Running secong pgm uning anonymous");    
})

test('Third playwright Test',async({page}) =>
{
    console.log("Running third pgm using Arrow function")
}
)
