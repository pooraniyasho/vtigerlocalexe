import{test as base} from '@playwright/test';
import {LoginPage} from  '../pages/login.js';
import data from '../test-data/login.json';
import dotenv from 'dotenv';

dotenv.config({ path: './credentials.env' });
const username = process.env.APP_USERNAME;
const password = process.env.APP_PASSWORD;
export let test= base.extend({
    loginPage: async({page},use)=>{
        const sign= new LoginPage(page);
        await sign.launch(data.url);
        

    if (!username || !password) {
      throw new Error('USERNAME or PASSWORD is missing from Jenkins credentials');
    }
        await sign.logindetail(username,password)
        await use(page)
        await sign.signout(data.url)
    }
}
);