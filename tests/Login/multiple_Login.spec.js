import {test} from '../../fixtures/customFixture.js'
import multipleLogin from "../../test-data/multipleLogin.json"
import data from '../../test-data/login.json';

test.skip('Login', async ({ signin }) => {
    test.slow()
    await signin.signout(data.url);
    for (let data1 of multipleLogin) {
        await signin.logindetail(data1.userName, data1.passWord);
        if ( signin.page.url() === data.Homeurl) {
            console.log("Valid credentails");
            await signin.verifyHomePage(data.Homeurl);
            await signin.signout(data.url);
            console.log("logout");
        }
        else{
            console.log("Invalid credential");
            const errorMessage = await signin.invalidErrorMessage.textContent();
            console.log(errorMessage.trim());
            await signin.logindetail(data.userName, data.passWord);
        }
    

    }
});

