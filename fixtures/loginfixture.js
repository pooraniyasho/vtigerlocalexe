import{test as base} from '@playwright/test';
import {LoginPage} from  '../pages/login.js';
import data from '../test-data/login.json';

export let test= base.extend({
    loginPage: async({page},use)=>{
        const sign= new LoginPage(page);
        await sign.launch(data.url);
        const username = process.env.USERNAME;
         const password = process.env.PASSWORD;

    if (!username || !password) {
      throw new Error('USERNAME or PASSWORD is missing from Jenkins credentials');
    }
        await sign.logindetail(username,);password
        await use(page)
        await sign.signout(data.url)
    }
}
);