import Layout from "../components/Layout";
import Update from "../components/Update";
import Cookies from 'js-cookie';
import Router from "next/router";
import { useEffect } from "react";
import { withRouter, useRouter } from 'next/router';

export default function UpdatePage(props){
    const router = useRouter();
    const query = router.query;
    const alert_token = Cookies.get('alert_token');
    const name = Cookies.get('name');
    if (alert_token === undefined){
        useEffect(()=>{
            Router.push('/login');
        }); 
    }
    return (
        <Layout alert_token={alert_token} name={name}>
            <Update query={query}></Update>
        </Layout>
    );
}