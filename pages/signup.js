import Layout from "../components/Layout";
import SignUp from "../components/SignUp";
import Cookies from 'js-cookie';
import Router from "next/router";
import { useEffect } from "react";

export default function SignUpPage(props){
    const alert_token = Cookies.get('alert_token');
    if (alert_token !== undefined){
      useEffect(()=>{
        Router.push('/');
    });
    }
    return (
        <Layout>
            {alert_token === undefined ? <SignUp></SignUp> : null}
        </Layout>
    );
}