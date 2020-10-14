import Layout from '../../components/Layout';
import Home from '../../components/Home';
import Cookies from 'js-cookie';
import Router from "next/router";
import { useEffect } from "react";

export default function HomePage() {
  const alert_token = Cookies.get('alert_token');
    if (alert_token !== undefined){
      useEffect(()=>{
        Router.push('/');
    });
    }
  return (
    <Layout>
      {alert_token === undefined ? <Home></Home> : null}
    </Layout>
  )
}
