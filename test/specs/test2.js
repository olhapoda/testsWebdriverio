import Login from '../pageobjects/mylogin.page.js'
describe('Login Test With Wrong Password', () => {
  it('should warn about unsuccsessfull login', async () => {

await Login.open()
await Login.login('standard_user', 'unknownpassword')

 });
});

