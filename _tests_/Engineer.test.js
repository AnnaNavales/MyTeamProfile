//const Engineer
const Engineer = require ('../lib/Engineer.js');

   // create engineer object
test(' create a engineer object', () => {
    const Engineer = new Engineer('AL', '03', 'al@email.com', 'alnav03');
    expect(engineer.github()).toBe(expect.any(String));
   
    });
    //  get from github
    test('get engineer github value', () => {
        const engineer = new Engineer('Al', '03', 'al@mail.com', 'alnav03');

         expect(engineer.getGithub()) .toBe(expect.any(stringContaining(engineer.github.toString())));
    });   
// get job role
test('get role of employee', () => {

    const engineer = new Engineer('AL', '03', 'al@mail.com', 'alnav03');
    expect(engineer.getRole()).toBe("Engineer");
});



