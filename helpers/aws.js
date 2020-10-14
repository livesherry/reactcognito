import {Auth} from 'aws-amplify';
import Router from 'next/router';

export async function SignIn(username, password) {
    try {
        const user = await Auth.signIn(username, password);
        return await user;
    } catch (error) {
        console.log('error signing in', error);
        return 0;
    }
}

export async function signUp(username, password, email, chatid, referralid) {
    try {
        const user = await Auth.signUp({
            username,
            password,
            attributes: {
                email,          // optional
                chat_id : chatid,
                referral : referralid 
            }
        });
        Router.push("/");
        return await { user };
    } catch (error) {
        console.log('error signing up:', error);
        return await error;
    }
}

export async function confirmSignUp(username, code) {
    try {
      await Auth.confirmSignUp(username, code);
      return 1;
    } catch (error) {
        console.log('error confirming sign up', error);
        return 0;
    }
}

export async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}