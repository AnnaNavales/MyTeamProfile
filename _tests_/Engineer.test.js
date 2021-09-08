//const Engineer
const Engineer = require ('../lib/Engineer.js');

   // create engineer object
test( 'create a set github username via constructor', () => {
    const testvalue = "GithubUser";
    const Engineer = new Engineer('AL', '03', 'al@email.com', 'testValue');
    expect(engineer.github()).toBe(testValue);
   
    });

    test("getRole() should return \"Engineer\"", ()=> {  "Engineer";
        const testValue = "Engineer";
        const engineer = new Engineer('Al', '03', 'al@mail.com', 'githubUser', 'Engineer');

         expect(engineer.getRle()) .toBe(testValue);
    });   

test("get Github username via github()", () => {
    const testvalue = "GithubUser";
    const engineer = new Engineer('AL', '03', 'al@mail.com', 'testValue',);
    expect(engineer.getRole()).toBe(testValue);
});



