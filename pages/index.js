import Dashboard from "../components/Dashboard";
import Layout from "../components/Layout";
import Cookies from 'js-cookie';
import Router from "next/router";
import { useEffect } from "react";

function DashboardPage({pairs}) {
    const alert_token = Cookies.get('alert_token');
    const name = Cookies.get('name');
    if (alert_token === undefined){
        useEffect(()=>{
            Router.push('/login');
        }); 
    }
    return (
        <>
            <Layout alert_token={alert_token} name={name}>
                {alert_token !== undefined ? <Dashboard pairs={pairs} alert_token={alert_token} name={name}></Dashboard> : null}
            </Layout>
        </>
    );
}

export default DashboardPage;